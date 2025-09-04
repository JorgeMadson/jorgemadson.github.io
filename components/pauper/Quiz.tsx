'use client';

import { useMemo, useState } from 'react';
import { MagicCard } from '@/types/Carta';
import QuestionCard from './QuestionCard';
import Options from './Options';

type QuestionType = 'name' | 'mana' | 'effect';

const MAX_QUESTIONS = 10;

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const getRandomUniqueCards = (all: MagicCard[], count: number) =>
  all.sort(() => Math.random() - 0.5).slice(0, count);

const getRandomType = (): QuestionType =>
  ['name', 'name', 'mana', 'effect'][getRandomInt(3)] as QuestionType;

const Quiz = ({ cartas }: { cartas: MagicCard[] }) => {
  const [quizCards] = useState(() => getRandomUniqueCards(cartas, MAX_QUESTIONS));
  console.log('Cartas selecionadas para o quiz:', quizCards.map(card => card.name).join(', '));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionType, setQuestionType] = useState<QuestionType>(getRandomType());
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<MagicCard | null>(null);

  const currentCard = quizCards[currentIndex];


  if (currentIndex >= MAX_QUESTIONS) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl mb-4">Quiz finalizado!</h2>
        <p className="mb-4">Sua pontuação: {score}/{MAX_QUESTIONS}</p>
        <button
          className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600"
          onClick={() => window.location.reload()}
        >
          Tentar novamente
        </button>
      </div>
    );
  }

    const options = useMemo(() => {
    // pegamos a carta correta e 3 cartas aleatórias diferentes
    const otherCards = cartas.filter(c => c.name !== currentCard.name);
    const randomChoices = getRandomUniqueCards(otherCards, 3); // 3 alternativas
    const allChoices = [...randomChoices, currentCard];

    // embaralhar as opções
    return allChoices.sort(() => Math.random() - 0.5);
  }, [currentCard, cartas]); // recalcula apenas quando a carta atual muda



  const handleAnswer = (choice: MagicCard) => {
    setSelected(choice);
    if (choice.name === currentCard.name) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setSelected(null);
      setCurrentIndex((prev) => prev + 1);
      setQuestionType(getRandomType());
    }, 1000);
  };

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
    </div>
  );
};

export default Quiz;
