'use client';

import Quiz from '@/components/pauper/Quiz';
import cartas from '@/lib/staples_full.json';
import { MagicCard } from '@/types/Carta';

const QuizPage = () => {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-cyan-400 drop-shadow-md mb-2">Quiz Pauper</h1>
            <h2 className="text-lg text-slate-300 mb-6">Você conhece todas as cartas?</h2>
            <Quiz cartas={cartas as MagicCard[]} />
        </main>
    );
};

export default QuizPage;
