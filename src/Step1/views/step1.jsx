// Components
import NavBar from "../components/nav/navBar";
import StepOneForm from "../components/forms/step1Form";
import Footer from "../components/footer";
import ProgressBar from "../components/progressBar";

// Styles
import "../styles/step1.styles.css";

const StepOne = () => {
  return (
    <section className="step1-w">
      <div className="step1-px">
        <NavBar />
        <ProgressBar />
        <StepOneForm />
      </div>
      <Footer />
    </section>
  );
};
export default StepOne;
