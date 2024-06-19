import "./HowToCards.scss";

const instructions = [
  {
    id: 1,
    number: "01",
    title: "Choose a category",
    content:
      "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
  },
  {
    id: 2,
    number: "02",
    title: "Guess letters",
    content:
      "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it's wrong, you lose some health, which empties after eight incorrect guesses.",
  },
  {
    id: 3,
    number: "03",
    title: "Win or lose",
    content:
      "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
  },
];

export default function HowToCards() {
  return (
    <div className="instructions-section">
      {instructions.map((card) => (
        <article className="instruction-card" key={card.id}>
          <div className="instruction-card__header">
            <p className="instruction-card__number">{card.number}</p>
            <p className="instruction-card__title">{card.title}</p>
            <p className="instruction-card__content--desktop-view">
              {card.content}
            </p>
          </div>
          <div className="instruction-card__tablet-wrapper">
            <p className="instruction-card__title--tablet-view">{card.title}</p>
            <p className="instruction-card__content">{card.content}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
