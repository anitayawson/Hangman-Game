import "./InGameModal.scss";
import PausedTitleImg from "../../assets/images/paused-mobile.svg";
import WonTitleImg from "../../assets/images/win-mobile.svg";
import { Link } from "react-router-dom";

export default function InGameModal({
  show,
  onClose,
  isGameWon,
  onRestartGame,
}) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal__backdrop">
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <img
          className="modal__title-img"
          src={isGameWon ? WonTitleImg : PausedTitleImg}
          alt={isGameWon ? "You Win" : "Paused"}
        />
        <div className="modal__btns">
          <button onClick={isGameWon ? onRestartGame : onClose}>
            {isGameWon ? "Play Again!" : "Continue"}
          </button>
          <Link to="/categories">New Category</Link>
          <Link to="/">Quit Game</Link>
        </div>
      </div>
    </div>
  );
}
