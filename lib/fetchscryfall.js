import fs from 'fs';

async function getCardData(name) {
  const res = await fetch(`https://api.scryfall.com/cards/named?exact=${encodeURIComponent(name)}`);
  if (!res.ok) return null;
  return res.json();
}

async function main() {
  const data = fs.readFileSync('staples.txt', 'utf-8');
  const cards = data.split('\n').map(line => line.trim()).filter(Boolean);
  const staples = JSON.stringify(cards, null, 2);
  console.log('Carregadas', cards.length, 'cartas staples pauper.txt');
  const cardDataList = [];

  for (const name of staples) {
    const data = await getCardData(name);
    //wait a bit to avoid rate limit
    await new Promise(r => setTimeout(r, 250));
    if (data) {
      cardDataList.push({ ...data });
      console.log('Obtido:', data.name);
    } else {
      console.log('Não encontrado:', name);
    }
  }

  fs.writeFileSync('staples_full.json', JSON.stringify(cardDataList, null, 2));
  console.log('staples_full.json criado com', cardDataList.length, 'cartas');
}

main();
