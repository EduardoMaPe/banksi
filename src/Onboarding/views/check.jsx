import Form from "./form";
import Submit from "./submit";

const Checking = () => {
  const handle = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
  }
  return(
    <form onSubmit={e => handle(e)}>
      <Form />
      <Submit />
    </form>
  )
};
export default Checking;