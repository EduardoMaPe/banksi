const Form = ({ids, type, name, placeHolder, labelTitle, styleContainer, change, ...props}) => {
  return(
    <div className={styleContainer}>
    <label htmlFor={ids}>{labelTitle}</label>
    <input onChange={e => change(e)} type={type}  name={name} placeholder={placeHolder} {...props}/>
  </div>
  )
};
export default Form;