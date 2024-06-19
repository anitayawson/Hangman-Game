import "./Home.scss";
import logo from "../../assets/images/logo.svg";
import PlayButton from "../../assets/images/icon-play.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <article className="home__content">
        <img src={logo} alt="Game Logo" className="logo" />
        <button className="home__play-btn">
          <img className="home__play-icon" src={PlayButton} alt="Play" />
        </button>
        <Link to="/how-to-play" className="home__instructions-btn">
          How to Play
        </Link>
      </article>
    </div>
  );
}
