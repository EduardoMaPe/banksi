const Ciec = () => {
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
        CIEC (opcional)
      </h4>
      <p>
        Al compartirnos tu CIEC podemos agilizar tu aprobación al día de hoy,
        además de obtener un mayor monto en tu préstamo.
      </p>
      <form onSubmit={(e) => e.preventDefault()} action="">
        <label htmlFor="ciec">CIEC (opcional)</label>
        <div>
          <input style={{textAlign: 'center'}} type="password" />
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
export default Ciec;
