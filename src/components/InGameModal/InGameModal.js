import "./InGameModal.scss";
import PausedTitleImg from "../../assets/images/paused-mobile.svg";
import { Link } from "react-router-dom";

export default function InGameModal({ show, onClose }) {
  return (
    <div className="modal__backdrop">
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <img className="modal__title-img" src={PausedTitleImg} alt="Paused" />
        <div className="modal__btns">
          <button onClick={onClose}>Continue</button>
          <button>New Category</button>
          <Link to="/">Quit Game</Link>
        </div>
      </div>
    </div>
  );
}
