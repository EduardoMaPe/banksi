// React Router
import { Link, useNavigate } from "react-router-dom";

// Styles
import "../../styles/navBar.styles.css";
const NavBar = () => {
  let navigate = useNavigate();

  const login = () => {
    navigate("");
  };

  return (
    <nav className="nav-flex nav-py">
      <h2>BANKSI</h2>
      <ul className="nav__ul-flex">
        <Link to={""}>¿Cómo funcionamos?</Link>
        <Link to={""}>Calcula tu crédito</Link>
        <Link to={""}>Sobre nosotros</Link>
        <Link to={""}>Preguntas frecuentes</Link>
      </ul>
      <button className="nav__btn-w" onClick={() => login()}>
        Iniciar sesión
      </button>
    </nav>
  );
};
export default NavBar;
