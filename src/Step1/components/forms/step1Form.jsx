// Styles
import '../../styles/step1Form.styles.css'

const StepOneForm = () => {
  return (
    <div className='step1-form'>
      <h3>Datos Personales</h3>
      <p>
        *Si eres Persona Moral, por favor llenar los siguientes campos con los
        datos del accionista mayoritario
      </p>

      <form action="">
        <div className='step1__form__input-flex step1__form__input-border'>
          <label htmlFor="select">¿Qué tipo de persona eres?</label>
          <select name="select" id="select">
            <option value="0">Selecciona una opción</option>
            <option value="1">no</option>
            <option value="2">quizas</option>
            <option value="3">no lo se</option>
          </select>
        </div>

        <div className='step1__form__input step1__form__input-gap step1__form__input-border'>
          <div className='step1__form__input-flex step1__form__input-w'>
            <label htmlFor="primer-nombre">Primer nombre</label>
            <input id='primer-nombre' type="text" placeholder='Ej: Carlos' />
          </div>
          <div className='step1__form__input-flex step1__form__input-w'>
            <label htmlFor="segundo-nombre">Segundo nombre</label>
            <input id='segundo-nombre' type="text" placeholder='Ej: Enrique' />
          </div>
        </div>

        <div className='step1__form__input step1__form__input-gap step1__form__input-border'>
          <div className='step1__form__input-flex step1__form__input-w'>
            <label htmlFor="apellido-paterno">Apellido paterno</label>
            <input id='apellido-paterno' type="text" placeholder='Ej: Rodríguez' />
          </div>
          <div className='step1__form__input-flex step1__form__input-w'>
            <label htmlFor="apellido-materno">Apellido materno</label>
            <input id='apellido-materno' type="text" placeholder='Ej: Hernández' />
          </div>
        </div>

        <div className='step1__form__input step1__form__input-gap step1__form__input-border'>
          <div className='step1__form__input-flex step1__form__input-w'>
            <label htmlFor="correo-electronico">Correo electrónico</label>
            <input id='correo-electronico' type="email" placeholder='Ej: test01@test.com' />
          </div>
          <div className='step1__form__input-flex step1__form__input-w'>
            <label htmlFor="celular">Número celular</label>
            <input id='celular' type="tel" placeholder='Ej: 5552535455' />
          </div>
        </div>

        <div className='step1__form__input step1__form__input-gap step1__form__input-border'>
          <div className='step1__form__input-flex step1__form__input-w'>
            <label htmlFor="contrasena">Contraseña</label>
            <input id='contrasena' type="password" placeholder='Ingresa tu contraseña' />
          </div>
          <div className='step1__form__input-flex step1__form__input-w'>
            <label htmlFor="confirma">Confirmación de contraseña</label>
            <input id='confirma' type="password" placeholder='Ingresa de nuevo tu contraseña' />
          </div>
        </div>
        <div className='step1__form__button-container'>
          <input type="submit" value='Continuar' />
        </div>
      </form>
    </div>
  );
};
export default StepOneForm;
