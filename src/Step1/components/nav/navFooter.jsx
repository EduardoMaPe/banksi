// React Router
import { Link } from "react-router-dom";
// Styles
import '../../styles/navFooter.styles.css'
const NavFooter = () => {
  return (
    <div className="nav-footer-flex">
      <div className="nav-footer__submenu">
        <h4>Navegación</h4>
        <ul className="nav-footer__submenu">
          <Link to={""}>Inicio</Link>
          <Link to={""}>¿Cómo funcionamos?</Link>
          <Link to={""}>Calcula tu crédito</Link>
        </ul>
      </div>
      <div className="nav-footer__submenu">
        <h4>Legal</h4>
        <Link to={""}>Términos y condiciones</Link>
        <Link to={""}>Aviso de privacidad</Link>
      </div>
    </div>
  );
};
export default NavFooter;
