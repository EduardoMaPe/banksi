// Hooks
import { useState } from "react";

// React Router
import { useNavigate } from "react-router-dom";

// Components
import InputTypes from "../forms-components/input-types";

// Helpers
import { colonia, fechaGenerator, genero } from "../../helpers/select-step3";

// Styles
import "../../styles/step3/step3Form.styles.css";
import SelectInput from "../forms-components/select-input";

const StepThreeForm = () => {
  const [_stepThreeForm, setStepThree] = useState({})
  let navigate = useNavigate();
  const nextPage = (e) => {
    e.preventDefault();
    navigate("/four");
  };
  const handleChange = (e) => {
    setStepThree({..._stepThreeForm, [e.target.name]: e.target.value})
  }
  console.log(_stepThreeForm)
  const inputsContainer = "step1__form__input step1__form__input-gap step1__form__input-border"
  return (
    <section className="step1-form">
      <h3>Tu dirección y RFC</h3>
      <form onSubmit={(e) => nextPage(e)}>

        <div className={inputsContainer}>
          <InputTypes ids={"calle"} type={"text"} name={"calle"} placeHolder={"Ingresa la calle"} labelTitle={"Calle"} change={handleChange} />
          <InputTypes ids={"num-exterior"} type={"number"} name={"num-exterior"} placeHolder={"Ingresa el Número exterior"} labelTitle={"No. Exterior"} change={handleChange} />
        </div>

        <div className={inputsContainer}>
          <InputTypes ids={"num-interior"} type={"number"} name={"num-interior"} placeHolder={"Ingresa el Número interior"} labelTitle={"No. Interior"} change={handleChange}  />
          <InputTypes ids={"codigo-postal"} type={"number"} name={"codigo-postal"} placeHolder={"Ingresa el Código Postal"} labelTitle={"Código Postal"} change={handleChange}  />
        </div>

        <div className={inputsContainer}>
          <SelectInput options={colonia} option0={'Selecciona una colonia'} labelTitle={'Colonia'} name={'colonia'} change={handleChange} ids={'colonia'} />
          <SelectInput options={genero} option0={'Selecciona un género'} labelTitle={'Género'} name={'genero'} change={handleChange} ids={'genero'} />
        </div>

        <div className={inputsContainer}>
          <div className="input-flex">
            <label>Fecha de nacimiento</label>
            <div className="container-fecha-nacimiento">
              <SelectInput options={fechaGenerator().anios} option0={'Año'} name={'anio'} change={handleChange} ids={'anio'} />
              <SelectInput options={fechaGenerator().meses} option0={'Mes'} name={'mes'} change={handleChange} ids={'mes'} />
              <SelectInput options={fechaGenerator().dias} option0={'Día'} name={'dia'} change={handleChange} ids={'dia'} />
            </div>
          </div>

          <InputTypes ids={"rfc"} type={"text"} name={"rfc"} placeHolder={"Ingresa RFC de representante legal"} labelTitle={"RFC del representante legal"} change={handleChange} />
        </div>

        <div className={inputsContainer}>
          <InputTypes ids={"razon-social"} type={"text"} name={"razon-social"} placeHolder={"Ingresa la información solicitada"} labelTitle={"Razón social del negocio"} change={handleChange} />
          <InputTypes ids={"rfc-negocio"} type={"text"} name={"rfc-negocio"} placeHolder={"Ingresa el RFC de tu negocio"} labelTitle={"RFC de tu negocio"} change={handleChange} />
          
        </div>

        <div className="step2__form__button-container">
          <button
            className="step2__form__button-w"
            onClick={() => navigate("/two")}
          >
            Regresar
          </button>
          <input
            className="step2__form__button-w"
            type="submit"
            value="Conocer ofertas"
          />
        </div>
      </form>
    </section>
  );
};
export default StepThreeForm;
