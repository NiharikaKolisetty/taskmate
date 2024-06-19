import "./addTask.css";

const AddTask = () => {
  return (
    <section className="addTask">
        <label htmlFor="task">Task Name:</label>
        <input type="text" id="task" name="task"></input>
    </section>
  )
}

export default AddTask
