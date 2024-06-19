import { useState } from "react";
import "./addTask.css";

const AddTask = () => {

  const[change,setChange] = useState("");

  const[progress,setProgress] = useState(false);

  const handleChange = (e) =>{
    setChange(e.target.value);
  }


  const handleReset = () =>{
    setChange("");
    setProgress(false);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    const task = {
      id: 123,
      Name: change,
      completed: Boolean(progress)
    }
    console.log(task);
    handleReset();
   
  }


  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" id="task" name="task" placeholder="Enter Task name" autoComplete="off" value={change}></input>
        <select onChange={(event) => {setProgress(event.target.value)}} value={progress}>
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <button type="submit">ADD TASK</button>
        <span className="reset" onClick={handleReset}>Reset</span>
        </form>
        <p>{change}</p>
        <p>{change.length}</p>
    </section>
  )
}

export default AddTask
