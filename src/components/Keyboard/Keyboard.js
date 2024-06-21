import "./Keyboard.scss";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Keyboard() {
  return (
    <div className="keyboard">
      {alphabet.map((letter) => (
        <button key={letter} className="keyboard__letter">
          {letter}
        </button>
      ))}
    </div>
  );
}
