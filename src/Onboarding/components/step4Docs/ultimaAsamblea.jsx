const UltimaAsamblea = () => {
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
        Ultima Asamblea
      </h4>
      <p>
        Documento donde definen quien es el representate legal y los inversores.
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
            <input type="file" accept=".pdf" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default UltimaAsamblea;
