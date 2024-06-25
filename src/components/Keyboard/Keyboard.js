import "./Keyboard.scss";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Keyboard({ onGuessLetter }) {
  return (
    <div className="keyboard">
      {alphabet.map((letter) => (
        <button
          key={letter}
          className="keyboard__letter"
          onClick={() => onGuessLetter(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
