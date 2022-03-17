// Hooks
import { useState } from "react";
// React Router
import { useNavigate } from "react-router-dom";

// Helpers
import { options_step1 } from "../../helpers/select-step1";

// Styles
import "../../styles/step1Form.styles.css";
import InputTypes from "../forms-components/input-types";
import SelectInput from "../forms-components/select-input";

const StepOneForm = () => {

  const [_stepOneForm, setStepOneForm] = useState({})

  let navigate = useNavigate();
  const nextPage = (e) => {
    e.preventDefault();
    navigate("/two");
  };

  const handleChange = (e) => {
    setStepOneForm({..._stepOneForm, [e.target.name]: e.target.value})
  }
  const selectStyles = "step1__form__input-flex step1__form__input-border"
  const inputsStyles = "step1__form__input-flex step1__form__input-w"
  return (
    <div className="step1-form">
      <h3>Datos Personales</h3>
      <p>
        *Si eres Persona Moral, por favor llenar los siguientes campos con los
        datos del accionista mayoritario
      </p>

      <form onSubmit={(e) => nextPage(e)} action="">
        <SelectInput options={options_step1} option0={'Selecciona una opción'} labelTitle={'¿Qué tipo de persona eres?'} styleSelectContainer={selectStyles} name={'Tipo de persona'} change={handleChange} ids={'tipoPersona'} />

        <div className="step1__form__input step1__form__input-gap step1__form__input-border">
          <InputTypes ids={"primer-nombre"} type={"text"} name={"primer-nombre"} placeHolder={"Ej: Carlos"} labelTitle={"Primer nombre"} styleContainer={inputsStyles} change={handleChange} />
          <InputTypes ids={"segundo-nombre"} type={"text"} name={"segundo-nombre"} placeHolder={"Ej: Enrique"} labelTitle={"Segundo nombre"} styleContainer={inputsStyles} change={handleChange} />
        </div>

        <div className="step1__form__input step1__form__input-gap step1__form__input-border">
          <InputTypes ids={"apellido-paterno"} type={"text"} name={"apellido-paterno"} placeHolder={"Ej: Rodríguez"} labelTitle={"Apellido paterno"} styleContainer={inputsStyles} change={handleChange} />
          <InputTypes ids={"apellido-materno"} type={"text"} name={"apellido-materno"} placeHolder={"Ej: Hernández"} labelTitle={"Apellido materno"} styleContainer={inputsStyles} change={handleChange} />
        </div>

        <div className="step1__form__input step1__form__input-gap step1__form__input-border">
          <InputTypes ids={"correo-electronico"} type={"email"} name={"correo-electronico"} placeHolder={"Ej: test01@test.com"} labelTitle={"Correo electrónico"} styleContainer={inputsStyles} change={handleChange} />
          <InputTypes ids={"telefono"} type={"tel"} name={"telefono"} placeHolder={"Ej: 5552535455"} labelTitle={"Número celular"} styleContainer={inputsStyles} change={handleChange} />
        </div>

        <div className="step1__form__input step1__form__input-gap step1__form__input-border">
          <InputTypes ids={"contrasenia"} type={"password"} name={"contrasenia"} placeHolder={"Ingresa tu contraseña"} labelTitle={"Contraseña"} styleContainer={inputsStyles} change={handleChange} />
          <InputTypes ids={"confirm-contrasenia"} type={"password"} name={"confim-contrasenia"} placeHolder={"Ingresa de nuevo tu contraseña"} labelTitle={"Confirmación de contraseña"} styleContainer={inputsStyles} change={handleChange} />
        </div>
        <div className="step1__form__button-container">
          <input type="submit" value="Continuar" />
        </div>
      </form>
    </div>
  );
};
export default StepOneForm;
