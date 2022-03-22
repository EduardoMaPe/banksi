// Components
import LogInLogOutBtn from "../../Onboarding/components/login-logout-btn";
import ComoFuncionamosTags from "./comoFuncionamosTags";

// Assets
import GifSec from "../assets/comofuncionagif.gif";

// Helpers
import { ComoFuncionamosTagsContent } from "../helpers/comoFuncionamosTags";

// Styles
import "../styles/comoFuncionamos.styles.css";
const ComoFuncionamos = () => {
  return (
    <section className="como-funcionamos">
      <h2>¿Cómo funcionamos?</h2>
      <div className="como-funcionamos__gif-tags">
        <img src={GifSec} alt="gif" />
        <div className="como-funcionamos__gif-tags__tags">
          {ComoFuncionamosTagsContent.map((el, idx) => (
            <ComoFuncionamosTags
              key={idx}
              id={idx + 1}
              title={el.title}
              body={el.content}
            />
          ))}
        </div>
      </div>
      <div className="como-funcionamos__btn-container">
        <LogInLogOutBtn btnAction={{}} btnTitle={"Solicita tu crédito"} />
      </div>
    </section>
  );
};
export default ComoFuncionamos;
