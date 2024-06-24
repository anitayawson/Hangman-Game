import "./InGame.scss";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import MenuIcon from "../../assets/images/icon-menu.svg";
import HeartIcon from "../../assets/images/icon-heart.svg";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Keyboard from "../../components/Keyboard/Keyboard";
import WordDisplay from "../../components/WordDisplay/WordDisplay";
import InGameModal from "../../components/InGameModal/InGameModal";

export default function InGame() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const { word, category } = location.state || {};

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="in-game">
      <nav className="in-game__nav">
        <div className="in-game__nav-left">
          <button className="menu-btn" onClick={handleOpenModal}>
            <img className="menu-btn__icon" src={MenuIcon} alt="Back Icon" />
          </button>
          <h3 className="in-game__category-name">Countries</h3>
        </div>
        <div className="in-game__progress">
          <ProgressBar />
          <img className="heart-icon" src={HeartIcon} alt="Heart" />
        </div>
      </nav>
      <section>
        <WordDisplay word={word} />
      </section>
      <section>
        <Keyboard />
      </section>
      {showModal && <InGameModal show={showModal} onClose={handleCloseModal} />}
    </div>
  );
}
