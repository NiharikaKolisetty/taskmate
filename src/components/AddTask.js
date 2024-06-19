import { useState } from "react";
import "./addTask.css";

const AddTask = () => {

  const[change,setChange] = useState("");

  const handleChange = (e) =>{
    setChange(e.target.value);
  }

  return (
    <section className="addTask">
        <form >
        <input onChange={(e)=>handleChange(e)} type="text" id="task" name="task" placeholder="Enter Task name" autoComplete="off"></input>
        <button type="submit">ADD TASK</button>
        </form>
        <p>{change}</p>
        <p>{change.length}</p>
    </section>
  )
}

export default AddTask
