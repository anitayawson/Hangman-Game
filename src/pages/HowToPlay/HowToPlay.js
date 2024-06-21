import "./HowToPlay.scss";
import "../../components/HowToCards/HowToCards";
import HowToCards from "../../components/HowToCards/HowToCards";
import BackIcon from "../../assets/images/icon-back.svg";
import useNavigation from "../../hooks/useNavigation";

export default function HowToPlay() {
  const { navigateBack } = useNavigation();

  return (
    <div className="how-to">
      <nav className="how-to__nav">
        <button onClick={navigateBack} className="back-btn">
          <img className="back-btn__icon" src={BackIcon} alt="Back Icon" />
        </button>
        <div className="how-to__title"></div>
      </nav>
      <section className="how-to__cards">
        <HowToCards />
      </section>
    </div>
  );
}
