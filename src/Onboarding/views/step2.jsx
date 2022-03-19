// React Router
import { useNavigate } from "react-router-dom";

// Components
import Footer from "../components/footer";
import StepTwoForm from "../components/forms/step2Form";
import NavBar from "../components/nav/navBar";
import ProgressBar from "../components/progressBar";

const StepTwo = () => {
  let navigate = useNavigate()

  const btnAction = () => {
    navigate('/')
  }
  return(
    <section>
      <div className="step1-px">
        <NavBar btnAction={btnAction} btnTitle={'Iniciar sesión'} />
        <ProgressBar />
        <StepTwoForm />
      </div>
      <Footer />
    </section>
  )
};
export default StepTwo;