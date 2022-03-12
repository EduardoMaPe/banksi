const StepOneForm = () => {
  return (
    <div>
      <h3>Datos Personales</h3>
      <p>
        *Si eres Persona Moral, por favor llenar los siguientes campos con los
        datos del accionista mayoritario
      </p>

      <form action="">
        <div>
          <label htmlFor="">¿Qué tipo de persona eres?</label>
          <select name="" id="">
            <option value="">si</option>
            <option value="">no</option>
            <option value="">quizas</option>
            <option value="">no lo se</option>
          </select>
        </div>

        <div>
          <div>
            <label htmlFor="">Primer nombre</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Segundo nombre</label>
            <input type="text" />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="">Apellido paterno</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Apellido materno</label>
            <input type="text" />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="">Correo electrónico</label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor="">Número celular</label>
            <input type="tel" />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="">Contraseña</label>
            <input type="password" />
          </div>
          <div>
            <label htmlFor="">Confirmación de contraseña</label>
            <input type="password" />
          </div>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
export default StepOneForm;
