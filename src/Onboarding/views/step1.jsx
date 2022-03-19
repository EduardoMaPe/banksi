// React Router
import { useNavigate } from "react-router-dom";

// Components
import NavBar from "../components/nav/navBar";
import StepOneForm from "../components/forms/step1Form";
import Footer from "../components/footer";
import ProgressBar from "../components/progressBar";

// Styles
import "../styles/step1.styles.css";

const StepOne = () => {
  let navigate = useNavigate()

  const btnAction = () => {
    navigate('/')
  }
  return (
    <section >
      <div className="step1-px">
        <NavBar btnAction={btnAction} btnTitle={'Iniciar sesión'} />
        <ProgressBar />
        <StepOneForm />
      </div>
      <Footer />
    </section>
  );
};
export default StepOne;
