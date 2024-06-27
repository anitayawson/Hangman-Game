import "./InGameModal.scss";
import PausedTitleImg from "../../assets/images/paused-mobile.svg";
import WonTitleImg from "../../assets/images/win-mobile.svg";
import LoseTitleImg from "../../assets/images/lose-mobile.svg";
import { Link } from "react-router-dom";

export default function InGameModal({
  show,
  onClose,
  isGameWon,
  onPlayAgain,
  onResetGame,
}) {
  if (!show) {
    return null;
  }

  let modalTitleImg;
  let modalAltText;
  let primaryButtonText;

  if (isGameWon === true) {
    modalTitleImg = WonTitleImg;
    modalAltText = "You Win";
    primaryButtonText = "Play Again!";
  } else if (isGameWon === false) {
    modalTitleImg = LoseTitleImg;
    modalAltText = "You Lose";
    primaryButtonText = "Play Again";
  } else {
    modalTitleImg = PausedTitleImg;
    modalAltText = "Paused";
    primaryButtonText = "Continue";
  }

  const handlePrimaryButtonClick = () => {
    if (isGameWon === true) {
      onPlayAgain();
    } else if (isGameWon === false) {
      onPlayAgain();
    } else {
      onClose();
    }
  };

  return (
    <div className="modal__backdrop">
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <img
          className="modal__title-img"
          src={modalTitleImg}
          alt={modalAltText}
        />
        <div className="modal__btns">
          <button onClick={handlePrimaryButtonClick}>
            {primaryButtonText}
          </button>
          <Link to="/categories" onClick={onResetGame}>
            New Category
          </Link>
          <Link to="/" onClick={onResetGame}>
            Quit Game
          </Link>
        </div>
      </div>
    </div>
  );
}
