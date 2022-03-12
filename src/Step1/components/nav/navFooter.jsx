import { Link } from "react-router-dom";

const NavFooter = () => {
  return (
    <div>
      <div>
        <h4>Navegación</h4>
        <ul>
          <Link to={""}>Inicio</Link>
          <Link to={""}>¿Cómo funcionamos?</Link>
          <Link to={""}>Calcula tu crédito</Link>
        </ul>
      </div>
      <div>
        <h4>Legal</h4>
        <Link to={""}>Términos y condiciones</Link>
        <Link to={""}>Aviso de privacidad</Link>
      </div>
    </div>
  );
};
export default NavFooter;
