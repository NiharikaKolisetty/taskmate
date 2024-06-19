import React from 'react';
import Header from "./components/Header";
import "./App.css";
import TaskList from "./components/TaskList";
import AddTask from './components/AddTask';

// import Footer from "./components/Footer";
const App = () => {
  // const[count, setCount] = useState(0);

  

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
    <Header/>
    <AddTask/>
    <TaskList title="Random" subTitle="Test"/>
    </>
  )
}

export default App
