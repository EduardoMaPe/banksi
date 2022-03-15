import { useNavigate } from "react-router-dom";

// Styles
import "../../styles/step2/step2Form.styles.css";

const StepTwoForm = () => {
  let navigate = useNavigate();

  const nextPage = (e) => {
    e.preventDefault();
    navigate("/three");
  };
  return (
    <div className='step1-form'>
      <h3>Información sobre tu negocio</h3>
      <p>
        * Con estas preguntas podremos conocer mejor tu perfil, recuerda
        contestar de la forma más precisa posible, ya que con esto definiremos
        tu oferta.
      </p>
      <form onSubmit={(e) => nextPage(e)} action="">
        <div className="step1__form__input-flex step1__form__input-border">
          <label htmlFor="dedicas">En unas palabras cuéntanos ¿A qué te dedicas?</label>
          <input id='dedicas' type="text" placeholder="Ej: Soy electricista" />
        </div>
        <div className="step1__form__input-flex step1__form__input-border">
          <label htmlFor="tiempo">¿Cuánto tiempo llevas operando con tu actividad?</label>
          <select name="tiempo" id="tiempo">
            <option value="0"> Selecciona una opción</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="step1__form__input-flex step1__form__input-border">
          <label htmlFor="ventas">¿Cuáles son tus ventas mensuales promedio?</label>
          <select name="ventas" id="ventas">
            <option value="0"> Selecciona una opción</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="step1__form__input-flex step1__form__input-border">
          <label htmlFor="clientes">¿El 50% de tus ingresos dependen del gobierno y/o de un solo cliente?</label>
          <select name="clientes" id="clientes">
            <option value="0"> Selecciona una opción</option>
            <option value="1">Sí</option>
            <option value="2">No</option>
          </select>
        </div>
        <div className="step1__form__input-flex step1__form__input-border">
          <label htmlFor="accionistas">¿Has cambiado de accionistas en algun momento?</label>
          <select name="accionistas" id="accionistas">
            <option value="0"> Selecciona una opción</option>
            <option value="1">Sí</option>
            <option value="2">No</option>
          </select>
        </div>
        <div className="step1__form__input-flex step1__form__input-border">
          <label htmlFor="acciones">¿Tienes el 50% o mas de las acciones?</label>
          <select name="acciones" id="acciones">
            <option value="0"> Selecciona una opción</option>
            <option value="1">Sí</option>
            <option value="2">No</option>
          </select>
        </div>
        <div className="step2__form__button-container">
          <button className="step2__form__button-w" onClick={() => navigate(-1)}>Regresar</button>
          <input className="step2__form__button-w" type="submit" value="Siguiente paso" />
        </div>
      </form>
    </div>
  );
};
export default StepTwoForm;
