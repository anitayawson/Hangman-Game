import "./InGame.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MenuIcon from "../../assets/images/icon-menu.svg";
import HeartIcon from "../../assets/images/icon-heart.svg";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Keyboard from "../../components/Keyboard/Keyboard";
import WordDisplay from "../../components/WordDisplay/WordDisplay";
import InGameModal from "../../components/InGameModal/InGameModal";
import { useCategories } from "../../contexts/CategoriesContext";

export default function InGame() {
  const [showModal, setShowModal] = useState(false);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [isGameWon, setIsGameWon] = useState(false);
  const [word, setWord] = useState("");
  const location = useLocation();
  const { category } = location.state || {};
  const { getRandomWord } = useCategories();

  useEffect(() => {
    if (location.state && location.state.word) {
      setWord(location.state.word);
    }
  }, [location.state]);

  useEffect(() => {
    const wordLetters = word.toUpperCase().split("");
    const correctGuesses = wordLetters.filter((letter) =>
      guessedLetters.includes(letter)
    );
    if (correctGuesses.length === wordLetters.length) {
      setIsGameWon(true);
      setShowModal(true);
    }
  }, [guessedLetters, word]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRestartGame = () => {
    const randomWord = getRandomWord(category);
    setWord(randomWord);
    setIsGameWon(false);
    setGuessedLetters([]);
    setShowModal(false);
  };

  const handleGuessedLetter = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    }
  };

  return (
    <div className="in-game">
      <nav className="in-game__nav">
        <div className="in-game__nav-left">
          <button className="menu-btn" onClick={handleOpenModal}>
            <img className="menu-btn__icon" src={MenuIcon} alt="Back Icon" />
          </button>
          <h3 className="in-game__category-name">{category}</h3>
        </div>
        <div className="in-game__progress">
          <ProgressBar />
          <img className="heart-icon" src={HeartIcon} alt="Heart" />
        </div>
      </nav>
      <section>
        <WordDisplay word={word} guessedLetters={guessedLetters} />
      </section>
      <section>
        <Keyboard
          onGuessLetter={handleGuessedLetter}
          guessedLetters={guessedLetters}
        />
      </section>
      {showModal && (
        <InGameModal
          show={showModal}
          onClose={handleCloseModal}
          isGameWon={isGameWon}
          onRestartGame={handleRestartGame}
        />
      )}
    </div>
  );
}
