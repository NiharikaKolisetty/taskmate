import { useState } from "react";
import "./boxCard.css";
const BoxCard = ({ result, children }) => {
  const [show, setShow] = useState(true);
  return (
    <div className={show ? "" : "hidden"}>
      <div className={`box-card ${result}`}>
        {children}
      </div>
      <button className="toggle-button" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default BoxCard;


