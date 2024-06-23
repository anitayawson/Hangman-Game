import "./WordDisplay.scss";

export default function WordDisplay() {
  return (
    <div className="word-display">
      <div className="word-display__letter">A</div>
      <div className="word-display__letter">B</div>
      <div className="word-display__letter--disabled"></div>
      <div className="word-display__letter">D</div>
      <div className="word-display__letter">E</div>
    </div>
  );
}
