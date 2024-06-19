import { useState } from "react";
import "./addTask.css";

const AddTask = () => {

  const[change,setChange] = useState("");

  const handleChange = (e) =>{
    setChange(e.target.value);
  }


  const handleReset = () =>{
    setChange("");
  }
  return (
    <section className="addTask">
        <form >
        <input onChange={(e)=>handleChange(e)} type="text" id="task" name="task" placeholder="Enter Task name" autoComplete="off" value={change}></input>
        <button type="submit">ADD TASK</button>
        <span className="reset" onClick={handleReset}>Reset</span>
        </form>
        <p>{change}</p>
        <p>{change.length}</p>
    </section>
  )
}

export default AddTask
