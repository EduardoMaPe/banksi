import { Link } from "react-router-dom";

const EstadosBancarios = () => {
  return (
    <div>
      <h4 className="">
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.8333 5.83325H11.6666V64.1666H58.3333V23.3333L40.8333 5.83325ZM37.9166 43.7499V55.4166H32.0833V43.7499H23.3333L35.0291 32.0833L46.6666 43.7499H37.9166ZM37.9166 26.2499V10.2083L53.9583 26.2499H37.9166Z"
            fill="black"
          />
        </svg>
        Estados Bancarios
      </h4>
      <p>
        Los últimos 3 estados de cuenta bancarios podrás descargarlos desde tu
        banca en línea. Si tienes dudas sobre el proceso, nosotros te explicamos
        cómo hacerlo paso a paso dando <Link to={""}>clic aquí.</Link>
      </p>
      <form action="">
        <div style={{ display: "flex", gap: "1rem" }}>
          <div
            style={{
              width: "300px",
              border: "1px solid",
              padding: "1rem 0.5rem",
            }}
          >
            subir archivo
            <label htmlFor="estado-bancario-1">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3334 13.6429H13.4762V20.5H11.1905V13.6429H4.33337V11.3571H11.1905V4.5H13.4762V11.3571H20.3334V13.6429Z"
                  fill="#00204A"
                />
              </svg>
            </label>
            <input id="estado-bancario-1" type="file" accept=".pdf" />
          </div>
          <div
            style={{
              width: "300px",
              border: "1px solid",
              padding: "1rem 0.5rem",
            }}
          >
            subir archivo
            <label htmlFor="estado-bancario-2"></label>
            <input id="estado-bancario-2" type="file" accept=".pdf" />
          </div>
          <div
            style={{
              width: "300px",
              border: "1px solid",
              padding: "1rem 0.5rem",
            }}
          >
            subir archivo
            <input type="file" accept=".pdf" />
          </div>
        </div>
        <p>*Entre más ingresos nos puedas demostrar mayor será tu préstamo.</p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div
            style={{
              width: "300px",
              border: "1px solid",
              padding: "1rem 0.5rem",
            }}
          >
            subir archivo
            <label htmlFor="estado-bancario-3"></label>
            <input id="estado-bancario-3" type="file" accept=".pdf" />
          </div>
          <div
            style={{
              width: "300px",
              border: "1px dashed",
              padding: "1rem 0.5rem",
            }}
          >
            subir archivo
            <label htmlFor="file" style={{ display: "block" }}>
              Descargaaa
            </label>
            <input
              id="file"
              type="file"
              accept=".pdf"
              style={{ display: "none" }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default EstadosBancarios;
