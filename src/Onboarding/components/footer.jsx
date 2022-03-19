// Components
import NavFooter from "./nav/navFooter";

// Assets
import Logo from "../assets/Logo-banksi.svg";
// Styles
import "../styles/footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-container-flex">
        <img src={Logo} alt="Logo" className="logo-w" />
        <div className="nav-dir__container">
          <div >
            <div className="footer__contacto">
              <label>Contacto</label>
              <p className="footer__contacto__dir">
                Av. Moliere #310 Int. 604, Polanco II, Sección Miguel Hidalgo,
                C.P: 11550, Ciudad de México, CDMX
              </p>
            </div>
            <p className="svg-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.62 7.79C5.06 10.62 7.38 12.94 10.21 14.38L12.41 12.18C12.69 11.9 13.08 11.82 13.43 11.93C14.55 12.3 15.75 12.5 17 12.5C17.2652 12.5 17.5196 12.6054 17.7071 12.7929C17.8946 12.9804 18 13.2348 18 13.5V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C12.4913 18 8.1673 16.2089 4.97918 13.0208C1.79107 9.8327 0 5.50868 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H4.5C4.76522 0 5.01957 0.105357 5.20711 0.292893C5.39464 0.48043 5.5 0.734784 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z"
                  fill="black"
                />
              </svg>
              55 7100 0466
            </p>
          </div>
          <NavFooter />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
