// Components
import Ciec from "../components/step4Docs/ciec";
import Footer from "../components/footer";
import StepFourHeader from "../components/headers/step4Header";
import EstadosBancarios from "../components/step4Docs/estadosBancarios";
import IdentificacionComprobante from "../components/step4Docs/identificacionYDomicilio";
import ConstanciaSituacionF from "../components/step4Docs/constanciaSituacionF";
import UltimaAsamblea from "../components/step4Docs/ultimaAsamblea";

const StepFour = () => {
  return (
    <section>
      <div className="step1-px">
        <StepFourHeader />
        <h2>¡Bienvenido a BankSi!</h2>
        <p>
          Estás muy cerca del crédito que tu negocio necesita, pero antes de
          ofrecerte una pre-oferta necesitamos que nos compartas algunos
          documentos.
        </p>
        <h3>Alta de documentos</h3>
        <p>
          A continuación te pediremos los siguientes documentos en PDF a color y
          sin tachaduras o alteraciones con el fin de validar el monto de tu
          préstamo.
        </p>
        <EstadosBancarios />
        <Ciec />
        <IdentificacionComprobante />
        <ConstanciaSituacionF />
        <UltimaAsamblea />
      </div>
      <Footer />
    </section>
  );
};
export default StepFour;
