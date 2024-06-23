import "./WordDisplay.scss";

export default function WordDisplay({ word }) {
  return (
    <div className="word-display">
      {word.split(" ").map((word, wordIndex) => (
        <div key={wordIndex} className="word-display__word">
          {word.split("").map((letter, letterIndex) => (
            <div key={letterIndex} className="word-display__letter">
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
