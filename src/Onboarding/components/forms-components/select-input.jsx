import '../../styles/select-input.styles.css'
const SelectInput = ({
  options,
  option0,
  labelTitle,
  name,
  change,
  ids,
}) => {
  return (
    <div className={'select-flex-w'}>
      {labelTitle ? (
        <label htmlFor={ids}>{labelTitle}</label>
      ) : null}
      <select className='select-border' onChange={(e) => change(e)} name={name} id={ids}>
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
