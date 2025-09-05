'use client';

import { useMemo, useState, useCallback, useEffect } from 'react';
import { MagicCard } from '@/types/Carta';
import QuestionCard from './QuestionCard';
import Options from './Options';

type QuestionType = 'name' | 'mana' | 'effect';
type QuizStatus = 'playing' | 'finished';

const MAX_QUESTIONS = 10;

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const getRandomUniqueCards = (all: MagicCard[], count: number) =>
  all.sort(() => Math.random() - 0.5).slice(0, count);

const getRandomType = (): QuestionType =>
  ['name', 'name', 'mana', 'effect'][getRandomInt(3)] as QuestionType;

const scoreMessage = (score: number) => {
  {
    if (score === MAX_QUESTIONS)
      return <p className="text-green-400 mb-4">Oh loko, brabo!! 🎉</p>
    else if (score >= MAX_QUESTIONS * 0.7)
      return <p className="text-cyan-400 mb-4">Muito bom! 👍</p>
    else if (score >= MAX_QUESTIONS * 0.4)
      return <p className="text-yellow-400 mb-4">KKK! Você é um goblin? 👺</p>
    else
      return <p className="text-red-400 mb-4">Sabe de p*rra nenhuma kkkkkk! Vai ler umas cartas. 🤓</p>
  }
}

const Quiz = ({ cartas }: { cartas: MagicCard[] }) => {
  const [quizStatus, setQuizStatus] = useState<QuizStatus>('playing');
  const [quizCards, setQuizCards] = useState<MagicCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionType, setQuestionType] = useState<QuestionType>('name');
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<MagicCard | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const initializeQuiz = useCallback(() => {
    const newQuizCards = getRandomUniqueCards(cartas, MAX_QUESTIONS);
    const newQuestionType = getRandomType();

    setQuizCards(newQuizCards);
    setQuestionType(newQuestionType);
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setQuizStatus('playing');
  }, [cartas]);

  // ⚡️ Inicialização no cliente
  useEffect(() => {
    initializeQuiz();
    setIsMounted(true);
  }, [initializeQuiz]);

  const currentCard = quizCards[currentIndex];

  // ⚡️ Restart reutiliza a mesma função
  const restartQuiz = useCallback(() => {
    initializeQuiz();
  }, [initializeQuiz]);

  const options = useMemo(() => {
    if (!currentCard || !isMounted) return [];

    let otherCards = cartas.filter(c => c.name !== currentCard.name);

    // Se for pergunta de mana, garantir que as opções tenham custos diferentes
    if (questionType === 'mana') {
      // Filtrar cartas com custo de mana diferente da carta atual
      otherCards = otherCards.filter(c => c.mana_cost !== currentCard.mana_cost);

      // Garantir que as 3 opções erradas tenham custos únicos entre si
      const uniqueManaCostOptions: MagicCard[] = [];
      const usedManaCosts = new Set<string>();

      // Adicionar a mana_cost da carta atual ao conjunto de custos usados
      usedManaCosts.add(currentCard.mana_cost || '-');

      for (const card of otherCards.sort(() => Math.random() - 0.5)) {
        if (!usedManaCosts.has(card.mana_cost || '-')) {
          uniqueManaCostOptions.push(card);
          usedManaCosts.add(card.mana_cost || '-');

          if (uniqueManaCostOptions.length >= 3) break;
        }
      }

      // Se não encontrou 3 opções com custos únicos, completar com cartas aleatórias
      if (uniqueManaCostOptions.length < 3) {
        const remainingCards = otherCards.filter(c =>
          !uniqueManaCostOptions.some(opt => opt.name === c.name)
        );
        uniqueManaCostOptions.push(
          ...remainingCards.slice(0, 3 - uniqueManaCostOptions.length)
        );
      }

      const allChoices = [...uniqueManaCostOptions, currentCard];
      return allChoices.sort(() => Math.random() - 0.5);
    }

    // Para outros tipos de pergunta, manter a lógica original
    const randomChoices = getRandomUniqueCards(otherCards, 3);
    const allChoices = [...randomChoices, currentCard];
    return allChoices.sort(() => Math.random() - 0.5);
  }, [currentCard, cartas, isMounted, questionType]);

  const handleAnswer = (choice: MagicCard) => {
    if (!currentCard) return;

    setSelected(choice);
    if (choice.name === currentCard.name) {
      setScore(prevScore => prevScore + 1);
    }

    setTimeout(() => {
      setSelected(null);

      if (currentIndex + 1 >= MAX_QUESTIONS) {
        setQuizStatus('finished');
      } else {
        setCurrentIndex(prev => prev + 1);
        setQuestionType(getRandomType());
      }
    }, 300);
  };

  if (!isMounted) {
    return (
      <div className="w-full max-w-xl flex flex-col items-center">
        <progress value={0} max={MAX_QUESTIONS} className="w-full h-3 accent-cyan-400 bg-slate-700 rounded mb-4" />
        <div className="h-64 w-48 bg-slate-700 rounded-lg animate-pulse mb-4"></div>
        <div className="w-full grid grid-cols-1 gap-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-12 bg-slate-700 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  if (quizStatus === 'finished') {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl mb-4">Quiz finalizado!</h2>
        {scoreMessage(score)}
        <p className="mb-4">Sua pontuação: {score}/{MAX_QUESTIONS}</p>
        <button
          className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600"
          onClick={restartQuiz}
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl flex flex-col items-center">
      <progress
        value={currentIndex}
        max={MAX_QUESTIONS}
        className="w-full h-3 accent-cyan-400 bg-slate-700 rounded mb-4"
      />
      <QuestionCard card={currentCard} type={questionType} />
      <Options
        currentCard={currentCard}
        options={options}
        allCards={cartas}
        questionType={questionType}
        onAnswer={handleAnswer}
        selected={selected}
      />
      <p className="mt-4">Pontuação: {score}</p>
      <p className="text-sm text-gray-600">Pergunta {currentIndex + 1} de {MAX_QUESTIONS}</p>
    </div>
  );
};

export default Quiz;
