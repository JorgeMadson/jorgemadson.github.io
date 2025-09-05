import { MagicCard } from '@/types/Carta';

const QuestionCard = ({ card, type }: { card: MagicCard; type: string }) => {
  if (type === 'effect') {
    return (
      <>
        <h3 className="text-lg mb-2">Qual carta tem este efeito?</h3>
        <p className="italic text-slate-300 mb-4">{card.oracle_text}</p>
      </>
    );
  }

  return (
    <>
      <h3 className="text-lg mb-2">
        {type === 'name' ? 'Qual é o nome desta carta?' : 'Qual é o custo de mana desta carta?'}
      </h3>
      <img
        src={card.image_uris?.art_crop}
        alt={card.name}
        className="rounded-lg shadow-lg mb-4"
      />
    </>
  );
};

export default QuestionCard;
