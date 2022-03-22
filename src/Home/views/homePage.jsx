

// Components
import Footer from "../../Onboarding/components/footer";
import ComoFuncionamos from "../components/comoFuncionamos";
import Hero from "../components/hero";

const HomePage = () => {
 
  return (
    <div style={{overflow: 'hidden', backgroundColor: 'var(--bgW)'}}>
      <Hero />
      <ComoFuncionamos />
      <Footer />
    </div>
  );
};
export default HomePage;
