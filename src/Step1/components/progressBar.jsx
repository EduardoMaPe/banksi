// Styles
import "../styles/progressBar.styles.css";
const ProgressBar = () => {
  const progress = 'progress__bar__steps'
  return (
    <div className="progress">
      <h2>Tu crédito en 3 sencillos pasos</h2>
      <div className="progress__bar">
        <div className="progress__bar__working">
          <p>1</p>
        </div>
        <div className="progress__bar__progress">-</div>
        <div className="progress__bar__steps">
          <p>2</p>
        </div>
        <div className="progress__bar__progress">-</div>
        <div className={`${progress}`}>
          <p>3</p>
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;
