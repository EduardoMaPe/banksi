export const fechaGenerator = () => {
  let dias = []
  for(let i = 1; i <= 31; i++) {
    dias.push(i)
  }
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  let anios = []
  for(let j = 1945; j <= 2022; j++) {
    anios.push(j)
  }
  return {dias, meses, anios}
}