// React Router
import { useNavigate } from "react-router-dom";

const StepFourHeader = () => {
  let navigate = useNavigate()
  const logOut = () => {
    navigate('/')
  }
  return (
    <header className="nav-flex nav-py">
      <h2>BANKSI</h2>
      <button className="nav__btn-w" onClick={() => logOut()}>
        Cerrar sesión
      </button>
    </header>
  );
};
export default StepFourHeader;
