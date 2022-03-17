const SelectInput = ({
  options,
  option0,
  labelTitle,
  styleSelectContainer,
  name,
  change,
  ids,
}) => {
  return (
    <div className={styleSelectContainer}>
      {labelTitle ? (
        <label htmlFor={ids}>{labelTitle}</label>
      ) : null}
      <select onChange={(e) => change(e)} name={name} id={ids}>
        <option value="0">{option0}</option>
        {options.map((value, idx) => (
          <option key={idx + 1} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectInput;
