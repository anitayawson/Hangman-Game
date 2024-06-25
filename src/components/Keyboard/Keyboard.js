import "./Keyboard.scss";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Keyboard({ onGuessLetter, guessedLetters }) {
  return (
    <div className="keyboard">
      {alphabet.map((letter) => (
        <button
          key={letter}
          className="keyboard__letter"
          onClick={() => onGuessLetter(letter)}
          disabled={guessedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
