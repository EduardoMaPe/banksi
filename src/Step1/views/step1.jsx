// Components
import NavBar from "../components/nav/navBar";
import StepOneForm from "../components/forms/step1Form";
import Footer from "../components/footer";
import ProgressBar from "../components/progressBar";

const StepOne = () => {
  return(
    <section>
      <NavBar />
      <ProgressBar />
      <StepOneForm />
      <Footer />
    </section>
  )
};
export default StepOne;