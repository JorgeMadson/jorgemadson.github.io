import { MagicCard } from '@/types/Carta';

const convertManaCostToSymbols = (manaCost: string) => {
  // Exemplo de manaCost: "{2}{U}{U}" vira 2🔵🔵
  return manaCost
    .replace(/{|}/g, '') // Remove '{'
    .trim() // Remove espaços extras no início/fim
    .split('') // Divide em símbolos individuais
    .map((symbol: string) => {
      if (!isNaN(Number(symbol))) {
        return symbol; // Números permanecem iguais
      }
      switch (symbol) {
        case 'W':
          return '⚪';
        case 'U':
          return '🔵';
        case 'B':
          return '⚫';
        case 'R':
          return '🔴';
        case 'G':
          return '🟢';
        case 'C':
          return '💠';
        case 'X':
          return '❌';
        default:
          return symbol; // Outros símbolos permanecem iguais
      }
    }).join('');
}

const Options = ({
  currentCard,
  questionType,
  onAnswer,
  options,
  selected,
}: {
  currentCard: MagicCard;
  allCards: MagicCard[];
  questionType: 'name' | 'mana' | 'effect';
  onAnswer: (c: MagicCard) => void;
  options: MagicCard[];
  selected: MagicCard | null;
}) => {

  return (
    <div className="w-full flex flex-col gap-3">
      {options.map((opt, idx) => {
        const isCorrect = opt.name === currentCard.name;
        const isSelected = selected?.name === opt.name;

        let classes = 'px-4 py-2 rounded font-semibold ';
        if (!selected) {
          classes += 'bg-slate-700 hover:bg-slate-600';
        } else if (isCorrect) {
          classes += 'bg-green-500';
        } else if (isSelected) {
          classes += 'bg-red-500';
        } else {
          classes += 'bg-slate-600';
        }

        const label =
          questionType === 'mana' ? convertManaCostToSymbols(opt.mana_cost|| '-') : opt.name;

        return (
          <button
            key={idx}
            disabled={!!selected}
            className={classes}
            onClick={() => onAnswer(opt)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
