// import Header from "./components/Header";
// import Footer from "./components/Footer";
import { useState } from "react";
import "./App.css";

const App = () =>{
  const[count,setCount]=useState(0);
  return(
    <div className="box">
      <p className="count">{count}</p>
      <button className="btn" onClick={()=>setCount(count+1)}>ADD</button>
      <button className="btn" onClick={()=>setCount(count-1)}>SUB</button>
      <button className="btn" onClick={()=>setCount(0)}>RESET</button>
    </div>
  )
}
export default App;



// export default function App(){
//   const[count,setCount] = useState(0);

//   // function handleAdd(){
//   //   setCount(count+1);
//   // }

//   // function handleSub(){
//   //   setCount(count-1);
//   // }

//   // function handleReset(){
//   //   setCount(0);
//   // }


//   return(
//     <>
//     {/* <Header/>
//     <h1>Main Content.</h1>
//     <Footer/> */}
//     <div className="App">
//       <div className="box">
//         <p className="count">{count}</p>
//         <button className="btn" onClick={()=>{setCount(count+1)}}>ADD</button>
//         <button className="btn" onClick={()=>{setCount(count-1)}}>SUB</button>
//         <button className="btn" onClick={()=>{setCount(0)}}>RESET</button>
//       </div>
//     </div>
//     </>
//   )
// }