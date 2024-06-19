import "./HowToPlay.scss";
import "../../components/HowToCards/HowToCards";
import HowToCards from "../../components/HowToCards/HowToCards";
import { useNavigate } from "react-router-dom";

import BackIcon from "../../assets/images/icon-back.svg";

export default function HowToPlay() {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="how-to">
      <nav className="how-to__nav">
        <button onClick={navigateBack} className="back-btn">
          <img className="back-btn__icon" src={BackIcon} alt="Back Icon" />
        </button>
        <h2 className="how-to__title">How To Play</h2>
      </nav>
      <section className="how-to__cards">
        <HowToCards />
      </section>
    </div>
  );
}
