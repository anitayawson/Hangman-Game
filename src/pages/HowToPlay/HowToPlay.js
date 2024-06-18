import "./HowToPlay.scss";
import "../../components/HowToCard/HowToCard";
import HowToCard from "../../components/HowToCard/HowToCard";

export default function Home() {
  return (
    <div>
      How To Play
      <section>
        <HowToCard />
      </section>
    </div>
  );
}
