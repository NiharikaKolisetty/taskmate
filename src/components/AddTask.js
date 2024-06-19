import "./addTask.css";

const AddTask = () => {
  return (
    <section className="addTask">
        <form>
        <label htmlFor="task">Task Name:</label>
        <input type="text" id="task" name="task"></input>
        <button type="submit">ADD TASK</button>
        </form>
    </section>
  )
}

export default AddTask
