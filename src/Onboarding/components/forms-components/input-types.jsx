import '../../styles/input-types.styles.css'
const InputTypes = ({ids, type, name, placeHolder, labelTitle, styleContainer, change, ...props}) => {
  return(
    <div className='input-flex'>
      <label htmlFor={ids}>{labelTitle}</label>
      <input className='input-border' onChange={e => change(e)} type={type}  name={name} placeholder={placeHolder} {...props}/>
    </div>
  )
};
export default InputTypes;