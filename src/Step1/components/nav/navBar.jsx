import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  let navigate = useNavigate();

  const login = () => {
    navigate("");
  };

  return (
    <nav>
      <h2>BANKSI</h2>
      <ul>
        <Link to={""}>¿Cómo funcionamos?</Link>
        <Link to={""}>Calcula tu crédito</Link>
        <Link to={""}>Sobre nosotros</Link>
        <Link to={""}>Preguntas frecuentes</Link>
      </ul>
      <button onClick={() => login()}>Iniciar sesión</button>
    </nav>
  );
};
export default NavBar;
