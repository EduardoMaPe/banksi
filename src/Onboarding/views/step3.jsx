// Components
import Footer from "../components/footer";
import StepThreeForm from "../components/forms/step3Form";
import NavBar from "../components/nav/navBar";
import ProgressBar from "../components/progressBar";

const StepThree = () => {
  return(
    <section className="step1-w">
      <div className="step1-px">
        <NavBar />
        <ProgressBar />
        <StepThreeForm />
      </div>
      <Footer />
    </section>
  )
};
export default StepThree;