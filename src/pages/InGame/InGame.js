import "./InGame.scss";
import MenuIcon from "../../assets/images/icon-menu.svg";
import HeartIcon from "../../assets/images/icon-heart.svg";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Keyboard from "../../components/Keyboard/Keyboard";
import WordDisplay from "../../components/WordDisplay/WordDisplay";

export default function InGame() {
  return (
    <div className="in-game">
      <nav className="in-game__nav">
        <div className="in-game__nav-left">
          <button className="menu-btn">
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
        <WordDisplay />
      </section>
      <section>
        <Keyboard />
      </section>
    </div>
  );
}
