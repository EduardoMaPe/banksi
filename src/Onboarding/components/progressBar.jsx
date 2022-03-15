// React Router
import { useLocation } from "react-router-dom";
// Styles
import "../styles/progressBar.styles.css";

const ProgressBar = () => {
  // Uso de location para saber la pagina en la que se encuentra y correr animación de barra
  let location = useLocation();

  // Esta clase contiene las funciones que validan el estatus de la barra de progreso
  class Validator {
    statusStep1 = () => {
      if (location.pathname === "/two" || location.pathname === "/three") return 'progress__bar__checked'
      return "progress__bar__working";
    };
    progressBarStep2 = () => {
      if (location.pathname === "/two") return "next-step-animated";
      if (location.pathname === "/three") return "step-done";
      return "progress__bar__progress";
    };
    statusStep2 = () => {
      if (location.pathname === "/two") return "progress__bar__working";
      if (location.pathname === "/three") return "progress__bar__checked";
      return "progress__bar__steps";
    };
    progressBarStep3 = () => {
      if (location.pathname === "/three") return "next-step-animated";
      return "progress__bar__progress";
    };
    statusStep3 = () => {
      if (location.pathname === "/three") return "progress__bar__working";
      return "progress__bar__steps";
    };
  }
  const validate = new Validator();
  return (
    <div className="progress">
      <h2>Tu crédito en 3 sencillos pasos</h2>
      <div className="progress__bar">
        <div className={validate.statusStep1()}>
          <p>
            {location.pathname === "/two" || location.pathname === "/three" ? (
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 0C13.44 0 0 13.44 0 30C0 46.56 13.44 60 30 60C46.56 60 60 46.56 60 30C60 13.44 46.56 0 30 0ZM30 54C16.77 54 6 43.23 6 30C6 16.77 16.77 6 30 6C43.23 6 54 16.77 54 30C54 43.23 43.23 54 30 54ZM41.64 18.87L24 36.51L18.36 30.87C17.7991 30.3091 17.0383 29.9939 16.245 29.9939C15.4517 29.9939 14.6909 30.3091 14.13 30.87C13.5691 31.4309 13.2539 32.1917 13.2539 32.985C13.2539 33.7783 13.5691 34.5391 14.13 35.1L21.9 42.87C23.07 44.04 24.96 44.04 26.13 42.87L45.9 23.1C46.1781 22.8225 46.3988 22.4928 46.5493 22.1299C46.6998 21.767 46.7773 21.3779 46.7773 20.985C46.7773 20.5921 46.6998 20.203 46.5493 19.8401C46.3988 19.4772 46.1781 19.1475 45.9 18.87C44.73 17.7 42.81 17.7 41.64 18.87Z"
                  fill="#11BFAE"
                />
              </svg>
            ) : (
              1
            )}
          </p>
        </div>
        <div className={validate.progressBarStep2()}>-</div>
        <div className={validate.statusStep2()}>
          <p>
            {location.pathname === "/three" ? (
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 0C13.44 0 0 13.44 0 30C0 46.56 13.44 60 30 60C46.56 60 60 46.56 60 30C60 13.44 46.56 0 30 0ZM30 54C16.77 54 6 43.23 6 30C6 16.77 16.77 6 30 6C43.23 6 54 16.77 54 30C54 43.23 43.23 54 30 54ZM41.64 18.87L24 36.51L18.36 30.87C17.7991 30.3091 17.0383 29.9939 16.245 29.9939C15.4517 29.9939 14.6909 30.3091 14.13 30.87C13.5691 31.4309 13.2539 32.1917 13.2539 32.985C13.2539 33.7783 13.5691 34.5391 14.13 35.1L21.9 42.87C23.07 44.04 24.96 44.04 26.13 42.87L45.9 23.1C46.1781 22.8225 46.3988 22.4928 46.5493 22.1299C46.6998 21.767 46.7773 21.3779 46.7773 20.985C46.7773 20.5921 46.6998 20.203 46.5493 19.8401C46.3988 19.4772 46.1781 19.1475 45.9 18.87C44.73 17.7 42.81 17.7 41.64 18.87Z"
                  fill="#11BFAE"
                />
              </svg>
            ) : (
              2
            )}
          </p>
        </div>
        <div className={validate.progressBarStep3()}>-</div>
        <div className={validate.statusStep3()}>
          <p>3</p>
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;
