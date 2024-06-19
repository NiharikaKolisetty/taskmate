import { useState } from "react";
import TaskCard from "./TaskCard";
import BoxCard from "./BoxCard";
import "./taskList.css";

const TaskList = (props) => {
  const [tasks, setTasks] = useState([
    { id: 1, Name: "Mahi", completed: true },
    { id: 2, Name: "Virat", completed: false },
    { id: 3, Name: "Rohit", completed: true },
    { id: 4, Name: "Hardik", completed: false },
  ]);

  function handleDel(id) {
    setTasks(tasks.filter((task) => id !== task.id));
  }

  const [show, setShow] = useState(true);

  return (
    <div className="tasklist">
      <h1>useState: Array State Value Example</h1>
      <div className="box1">
        <h2>Tasks List {props.title} {props.subTitle}</h2>
        <button onClick={() => setShow(!show)}>{show ? "HIDE" : "SHOW"}</button>
        <ul>
          {show && tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDel={handleDel} />
          ))}
        </ul>
      </div>

      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, facere!</p>
        <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci in incidunt qui cupiditate, saepe et.</p>
      </BoxCard>

      <BoxCard result="warning">
        <p className="title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, facere!</p>
        <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci in incidunt qui cupiditate, saepe et.</p>
      </BoxCard>
    </div>
  );
};

export default TaskList;
