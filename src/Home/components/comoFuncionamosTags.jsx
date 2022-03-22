import '../styles/comoFuncionamosTags.styles.css'
const ComoFuncionamosTags = ({id, title,body}) => {
  return(
    <div className='tag-container tag-container-dark'>
      <div className='tag-container__id tag-container__id-dark'>
        <h4>{id}</h4>
      </div>
      <div className='tag-container__content'>
        <label>{title}</label>
        <p>{body}</p>
      </div>
    </div>
  )
};
export default ComoFuncionamosTags;