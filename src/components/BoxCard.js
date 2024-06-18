import { useState } from "react"
const BoxCard = ({result,children}) => {
    const[show, setShow] = useState(true);
  return (
    <div className={show? " ": "hidden"}>
      <div className={`box-card ${result}`}>
        {children}
      </div>
      <button className="toggle-button" onClick={()=> setShow(!show)}>Hide</button>
    </div>
  )
}

export default BoxCard
