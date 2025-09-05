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

    return { newQuizCards, newQuestionType };
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

    const otherCards = cartas.filter(c => c.name !== currentCard.name);
    const randomChoices = getRandomUniqueCards(otherCards, 3);
    const allChoices = [...randomChoices, currentCard];

    return allChoices.sort(() => Math.random() - 0.5);
  }, [currentCard, cartas, isMounted]);

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
    }, 500);
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
      <p className="mt-4">Pontuação: {score}/ {MAX_QUESTIONS}</p>
    </div>
  );
};

export default Quiz;
