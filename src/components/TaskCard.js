import "./taskCard.css";

const TaskCard = ({ task, handleDel }) => {
  return (
    <div>
      <li className={task.completed ? "completed" : "incomplete"}>
        <span>
          {task.id} - {task.Name}
        </span>
        <button onClick={() => handleDel(task.id)}>Delete</button>
      </li>
    </div>
  );
}

export default TaskCard;
