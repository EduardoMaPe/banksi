// React Router
import { useNavigate } from "react-router-dom";
import LogInLogOutBtn from "../../Onboarding/components/login-logout-btn";

// Components
import NavBar from "../../Onboarding/components/nav/navBar";

// Assets
import Imag from "../assets/Hero.svg";

// Styles
import "../styles/hero.styles.css";
const Hero = () => {
  let navigate = useNavigate();

  const btnAction = () => {
    navigate("/one");
  };
  return (
    <main className="bg-hero">
      <div className="container">
        <NavBar btnAction={btnAction} btnTitle={"Solicita tu crédito"} />
        <div className="main-container">
          <div>
            <h1>
              Créditos para tu negocio en <span>48 horas</span> desde tu
              comodidad.
            </h1>
            <div className="tasa-prestamo">
              <h4>Hasta $2 millones de pesos.</h4>
              <label> Tasa desde el 4% + IVA y plazos de 6 a 18 meses</label>
            </div>

            <LogInLogOutBtn
              btnAction={btnAction}
              btnTitle={"Solicita tu crédito"}
            />
          </div>
          <img src={Imag} alt="Prestamo" style={{ height: "100%" }} />
        </div>
      </div>
    </main>
  );
};
export default Hero;
