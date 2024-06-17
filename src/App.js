// import Header from "./components/Header";

import { useState } from "react"
import "./App.css";
// import Footer from "./components/Footer";
const App = () => {
  // const[count, setCount] = useState(0);

  const[tasks, setTasks] = useState([
    {id:1, Name:"Mahi",completed:true},
    {id:2, Name:"Virat",completed:false},
    {id:3, Name:"Rohit",completed:true},
    {id:4, Name:"Hardik", completed:false}
  ]);

  function handleDel(id){
    setTasks(tasks.filter(task=> id!== task.id))
  }

  const[show, setShow] = useState(true);

  // function handleAdd(){
  //   setCount(count=> count +1);
  //   setCount(count=> count +1);
  //   setCount(count=> count +1);
  // }

  // function handleSub(){
  //   setCount(count-1);
  // }

  // function handleReset(){
  //   setCount(0);
  // }
  // return (
  //   <div>
  //     {/* <Header/> */}
  //     <h1>useState Example</h1>
  //     <div className="box">
  //       <h2>Count Value - {count}</h2>
  //       <button onClick={handleAdd}>ADD</button>
  //       <button onClick={handleSub}>SUB</button>
  //       <button onClick={handleReset}>RESET</button>
  //     </div>
  //     {/* <Footer/> */}
    // </div>
  // )

  return(
    <>
    <h1>useState : Array State Value Example</h1>
    <div className="box1">
      <h2>Tasks List</h2>
      <button onClick={()=> setShow(!show)}>HIDE</button>
      <ul>
        {show && tasks.map((task)=>(
          <li key={task.id}>
            <span>{task.id}-{task.Name}</span>
            <button onClick={()=>handleDel(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>

    </>
  )
}

export default App
