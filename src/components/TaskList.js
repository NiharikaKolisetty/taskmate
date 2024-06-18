import { useState } from "react";
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
    <div>
      <h1>useState : Array State Value Example</h1>
      <div className="box1">
        <h2>Tasks List {props.title} {props.subTitle}</h2>
        <button onClick={() => setShow(!show)}>HIDE</button>
        <ul>
          {show &&
            tasks.map((task) => (
              <li
                key={task.id}
                className={task.completed ? "completed" : "incomplete"}
              >
                <span>
                  {task.id}-{task.Name}
                </span>
                <button onClick={() => handleDel(task.id)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
