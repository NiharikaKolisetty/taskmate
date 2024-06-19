import "./addTask.css";

const AddTask = () => {
  return (
    <section className="addTask">
        <form>
        <label htmlFor="task">Task Name:</label>
        <input type="text" id="task" name="task" placeholder="Enter Task name" autoComplete="off"></input>
        <button type="submit">ADD TASK</button>
        </form>
    </section>
  )
}

export default AddTask
