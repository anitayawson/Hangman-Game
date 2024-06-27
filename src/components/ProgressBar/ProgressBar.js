import "./ProgressBar.scss";

export default function ProgressBar({ progressPercentage }) {
  return (
    <div className="progress-bar">
      <div
        className="progress"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
}
