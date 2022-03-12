// Styles
import "../styles/progressBar.styles.css";
const ProgressBar = () => {
  return (
    <div>
      <h2>Tu crédito en 3 sencillos pasos</h2>
      <div className="progress__bar">
        <div className="progress__bar__inprogress">1</div>
        <div className="progress__bar__progress">-</div>
        <div className="progress__bar__steps">2</div>
        <div className="progress__bar__progress">-</div>
        <div className="progress__bar__steps hidden">3</div>
      </div>
    </div>
  );
};
export default ProgressBar;
