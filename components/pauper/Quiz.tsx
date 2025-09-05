'use client';

import { useMemo, useState, useCallback } from 'react';
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
  const [quizCards, setQuizCards] = useState(() => getRandomUniqueCards(cartas, MAX_QUESTIONS));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionType, setQuestionType] = useState<QuestionType>(getRandomType());
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<MagicCard | null>(null);

  const currentCard = quizCards[currentIndex];

  const restartQuiz = useCallback(() => {
    setQuizCards(getRandomUniqueCards(cartas, MAX_QUESTIONS));
    setCurrentIndex(0);
    setQuestionType(getRandomType());
    setScore(0);
    setSelected(null);
    setQuizStatus('playing');
  }, [cartas]);

  const options = useMemo(() => {
    if (!currentCard) return [];

    const otherCards = cartas.filter(c => c.name !== currentCard.name);
    const randomChoices = getRandomUniqueCards(otherCards, 3);
    const allChoices = [...randomChoices, currentCard];

    return allChoices.sort(() => Math.random() - 0.5);
  }, [currentCard, cartas]);

  const handleAnswer = (choice: MagicCard) => {
    setSelected(choice);
    if (choice.name === currentCard.name) {
      setScore(score + 1);
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
      <p className="mt-4">Pontuação: {score}</p>
    </div>
  );
};

export default Quiz;
