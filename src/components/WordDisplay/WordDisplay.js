import "./WordDisplay.scss";

export default function WordDisplay({ word, guessedLetters }) {
  return (
    <div className="word-display">
      {word.split(" ").map((word, wordIndex) => (
        <div key={wordIndex} className="word-display__word">
          {word.split("").map((letter, letterIndex) => (
            <div
              key={letterIndex}
              className={`word-display__letter ${
                guessedLetters.includes(letter.toUpperCase())
                  ? ""
                  : "word-display__letter--disabled"
              }`}
            >
              {guessedLetters.includes(letter.toUpperCase()) ? letter : " "}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
