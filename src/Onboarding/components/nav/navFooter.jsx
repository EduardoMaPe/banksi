// React Router
import { Link } from "react-router-dom";
// Styles
import "../../styles/navFooter.styles.css";
const NavFooter = () => {
  return (
    <div className="nav-footer-flex">
      <div className="nav-footer__submenu">
        <label>Navegación</label>
        <ul className="nav-footer__submenu">
          <Link to={""}>Inicio</Link>
          <Link to={""}>¿Cómo funcionamos?</Link>
          <Link to={""}>Calcula tu crédito</Link>
        </ul>
      </div>
      <div className="nav-footer__submenu">
        <label>Legal</label>
        <ul className="nav-footer__submenu">
          <Link to={""}>Términos y condiciones</Link>
          <Link to={""}>Aviso de privacidad</Link>
        </ul>
      </div>
    </div>
  );
};
export default NavFooter;
