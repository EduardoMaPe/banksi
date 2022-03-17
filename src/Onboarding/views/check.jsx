import { useState } from "react";
import Form from "./form";
import Submit from "./submit";

const Checking = () => {
  const [el, setEl] = useState({})

  const handleChange = (e) => {
    setEl({...el, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  console.log(el)
  return(
    <form onSubmit={handleSubmit}>
      <Form ids={'hey'} type='text' name={'hey'} placeHolder={'Iprale chamaco'} labelTitle={'Iprale'} change={handleChange} required />
      <Submit />
    </form>
  )
};
export default Checking;