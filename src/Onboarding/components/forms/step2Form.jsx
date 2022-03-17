// Hooks
import { useState } from "react";

// React Router
import { useNavigate } from "react-router-dom";

// Helpers
import { tiempoActividad, ventasMensuales, siNo } from "../../helpers/select-step2";
// Styles
import "../../styles/step2/step2Form.styles.css";
import InputTypes from "../forms-components/input-types";
import SelectInput from "../forms-components/select-input";

const StepTwoForm = () => {
  const [_stepTwoForm, setStepTwoForm] = useState({})
  let navigate = useNavigate();

  const nextPage = (e) => {
    e.preventDefault();
    navigate("/three");
  };
  const handleChange = (e) => {
    setStepTwoForm({..._stepTwoForm, [e.target.name]: e.target.value})
  }
  const inputsStyles = "step1__form__input-flex step1__form__input-border"
  return (
    <div className='step1-form'>
      <h3>Información sobre tu negocio</h3>
      <p>
        * Con estas preguntas podremos conocer mejor tu perfil, recuerda
        contestar de la forma más precisa posible, ya que con esto definiremos
        tu oferta.
      </p>
      <form onSubmit={(e) => nextPage(e)} action="">
        <InputTypes ids={"dedicas"} type={"text"} name={"dedicas"} placeHolder={"Ej: Soy electricista"} labelTitle={"En unas palabras cuéntanos ¿A qué te dedicas?"} styleContainer={inputsStyles} change={handleChange} />
        <SelectInput options={tiempoActividad} option0={'Selecciona una opción'} labelTitle={'¿Cuánto tiempo llevas operando con tu actividad?'} styleSelectContainer={inputsStyles} name={'Tiempo de actividad'} change={handleChange} ids={'tiempo-actividad'} />
        <SelectInput options={ventasMensuales} option0={'Selecciona una opción'} labelTitle={'¿Cuáles son tus ventas mensuales promedio?'} styleSelectContainer={inputsStyles} name={'Ventas promedio'} change={handleChange} ids={'ventas-promedio'} />
        <SelectInput options={siNo} option0={'Selecciona una opción'} labelTitle={'¿El 50% de tus ingresos dependen del gobierno y/o de un solo cliente?'} styleSelectContainer={inputsStyles} name={'clientes'} change={handleChange} ids={'clientes'} />
        <SelectInput options={siNo} option0={'Selecciona una opción'} labelTitle={'¿Has cambiado de accionistas en algun momento?'} styleSelectContainer={inputsStyles} name={'accionistas'} change={handleChange} ids={'accionistas'} />
        <SelectInput options={siNo} option0={'Selecciona una opción'} labelTitle={'¿Tienes el 50% o mas de las acciones?'} styleSelectContainer={inputsStyles} name={'acciones'} change={handleChange} ids={'acciones'} />
        <div className="step2__form__button-container">
          <button className="step2__form__button-w" onClick={() => navigate('/')}>Regresar</button>
          <input className="step2__form__button-w" type="submit" value="Siguiente paso" />
        </div>
      </form>
    </div>
  );
};
export default StepTwoForm;
