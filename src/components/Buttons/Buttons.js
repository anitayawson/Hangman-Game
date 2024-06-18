import "./Buttons.scss";

export function ButtonOne() {
  return (
    <div>
      <button className="btn-one">How To Play</button>
    </div>
  );
}

export function ButtonTwo() {
  return <button className="btn-two">Quit Game</button>;
}
