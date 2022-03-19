// React Router
import { useNavigate } from "react-router-dom";

// Components
import Footer from "../components/footer";
import StepThreeForm from "../components/forms/step3Form";
import NavBar from "../components/nav/navBar";
import ProgressBar from "../components/progressBar";

const StepThree = () => {
  let navigate = useNavigate()

  const btnAction = () => {
    navigate('/')
  }
  return(
    <section className="">
      <div className="step1-px">
        <NavBar btnAction={btnAction} btnTitle={'Iniciar sesión'} />
        <ProgressBar />
        <StepThreeForm />
      </div>
      <Footer />
    </section>
  )
};
export default StepThree;