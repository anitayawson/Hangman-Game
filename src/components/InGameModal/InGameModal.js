import "./InGameModal.scss";
import PausedTitleImgMobile from "../../assets/images/paused-mobile.svg";
import PausedTitleImgDesktop from "../../assets/images/paused-desktop.svg";
import WonTitleImgMobile from "../../assets/images/win-mobile.svg";
import WonTitleImgDesktop from "../../assets/images/win-desktop.svg";
import LoseTitleImgMobile from "../../assets/images/lose-mobile.svg";
import LoseTitleImgDesktop from "../../assets/images/lose-desktop.svg";
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

  let modalAltText;
  let primaryButtonText;
  let mobileImg;
  let desktopImg;

  if (isGameWon === true) {
    mobileImg = WonTitleImgMobile;
    desktopImg = WonTitleImgDesktop;
    modalAltText = "You Win";
    primaryButtonText = "Play Again!";
  } else if (isGameWon === false) {
    mobileImg = LoseTitleImgMobile;
    desktopImg = LoseTitleImgDesktop;
    modalAltText = "You Lose";
    primaryButtonText = "Play Again";
  } else {
    mobileImg = PausedTitleImgMobile;
    desktopImg = PausedTitleImgDesktop;
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
        <picture className="modal__title-img">
          <source srcSet={desktopImg} media="(min-width: 768px)" />
          <img src={mobileImg} alt={modalAltText} />
        </picture>
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
