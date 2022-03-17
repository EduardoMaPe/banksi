// React Router
import { useNavigate } from "react-router-dom";

// Helpers
import { fechaGenerator } from "../../helpers/fechaGenerator";

// Styles
import "../../styles/step3/step3Form.styles.css";

const StepThreeForm = () => {
  let navigate = useNavigate();
  const nextPage = (e) => {
    e.preventDefault();
    navigate("/four");
  };
  return (
    <div className="step1-form">
      <h3>Tu dirección y RFC</h3>
      <form onSubmit={(e) => nextPage(e)}>
        <div className="step1__form__input step1__form__input-gap step1__form__input-border">
          <div className="step1__form__input-flex step1__form__input-w">
            <label htmlFor="calle">Calle</label>
            <input id="calle" type="text" placeholder="Ingresa la calle" />
          </div>
          <div className="step1__form__input-flex step1__form__input-w">
            <label htmlFor="num-exterior">No. Exterior</label>
            <input
              id="num-exterior"
              type="number"
              placeholder="Ingresa el Número exterior"
            />
          </div>
        </div>

        <div className="step1__form__input step1__form__input-gap step1__form__input-border">
          <div className="step1__form__input-flex step1__form__input-w">
            <label htmlFor="num-interior">No. Interior</label>
            <input
              id="num-interior"
              type="text"
              placeholder="Ingresa el Número exterior"
            />
          </div>
          <div className="step1__form__input-flex step1__form__input-w">
            <label htmlFor="codigo-postal">Código Postal</label>
            <input
              id="codigo-postal"
              type="number"
              placeholder="Ingresa el Código Postal"
            />
          </div>
        </div>

        <div className="step1__form__input step1__form__input-gap step1__form__input-border">
          <div className="step1__form__input-flex step1__form__input-w">
            <label htmlFor="colonia">Colonia</label>
            <select name="colonia" id="colonia">
              <option value="0">Selecciona una colonia</option>
              <option value="">a</option>
            </select>
          </div>
          <div className="step1__form__input-flex step1__form__input-w">
            <label htmlFor="genero">Género</label>
            <select name="genero" id="genero">
              <option value="0">Selecciona un género</option>
              <option value="1">Masculino</option>
              <option value="2">Femenino</option>
            </select>
          </div>
        </div>

        <div className="step1__form__input step1__form__input-gap step1__form__input-border">
          <div className="step1__form__input-flex step1__form__input-w">
            <label htmlFor="">Fecha de nacimiento</label>
            <div className="container-fecha-nacimiento">
              <div className="step1__form__input-flex step1__form__input-w">
                <select name="anio" id="anio">
                  <option value="0">Año</option>
                  {fechaGenerator().anios.map((anio, idx) => (
                      <option value={idx + 1}>{anio}</option>
                    ))}
                </select>
              </div>
              <div className="step1__form__input-flex step1__form__input-w">
                <select name="mes" id="mes">
                  <option value="0">Mes</option>
                  {fechaGenerator().meses.map((mes, idx) => (
                      <option value={idx + 1}>{mes}</option>
                    ))}
                </select>
              </div>
              <div className="step1__form__input-flex step1__form__input-w">
                <select name="dia" id="dia">
                  <option value="0">Día</option>
                  {fechaGenerator().dias.map((dia, idx) => (
                      <option value={idx + 1}>{dia}</option>
                    ))}
                </select>
              </div>
            </div>
          </div>

          <div className="step1__form__input-flex step1__form__input-w">
            <label htmlFor="rfc">RFC del representante legal</label>
            <input
              id="rfc"
              type="text"
              placeholder="Ingresa RFC del representante legal"
            />
          </div>
        </div>

        <div className="step1__form__input step1__form__input-gap step1__form__input-border">
          <div className="step1__form__input-flex step1__form__input-w">
            <label htmlFor="razon-social">Razón social de tu negocio</label>
            <input
              id="razon-social"
              type="text"
              placeholder="Ingresa la información solicitada"
            />
          </div>
          <div className="step1__form__input-flex step1__form__input-w">
            <label htmlFor="segundo-nombre">RFC de tu negocio</label>
            <input
              id="segundo-nombre"
              type="text"
              placeholder="Ingresa el RFC de tu negocio"
            />
          </div>
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
    </div>
  );
};
export default StepThreeForm;
