// React Router
import { Link } from "react-router-dom";
// Assets
import Logo from '../../assets/Logo-banksi.svg'
// Styles
import "../../styles/navBar.styles.css";
import LogInLogOutBtn from "../login-logout-btn";
const NavBar = ({btnTitle, btnAction}) => {

  return (
    <nav className="nav-flex nav-py">
      <img src={Logo} alt="Logo" className="logo-w" />
      <ul className="nav__ul-flex">
        <Link to={""}>¿Cómo funcionamos?</Link>
        <Link to={""}>Calcula tu crédito</Link>
        <Link to={""}>Sobre nosotros</Link>
        <Link to={""}>Preguntas frecuentes</Link>
      </ul>
      <LogInLogOutBtn btnAction={btnAction} btnTitle={btnTitle} />
    </nav>
  );
};
export default NavBar;
