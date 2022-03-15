// Components
import Footer from "../components/footer";
import StepTwoForm from "../components/forms/step2Form";
import NavBar from "../components/nav/navBar";
import ProgressBar from "../components/progressBar";

const StepTwo = () => {
  return(
    <section className="step1-w">
      <div className="step1-px">
        <NavBar />
        <ProgressBar />
        <StepTwoForm />
      </div>
      <Footer />
    </section>
  )
};
export default StepTwo;