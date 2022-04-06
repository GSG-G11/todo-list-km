const AddTodo = ({ task:{taskTitle, taskTime, taskDay}, handleChange, addTask, openAdd }) => {
  return (
    <form className={`form add-form ${openAdd ? 'open-form' : ''}`}>
        <div className="task-title">
          <label htmlFor="taskTitle">Task Title</label>
          <input onChange={handleChange} type="text" className="inpt" name="taskTitle" value={taskTitle} placeholder="Type Your Task Here..." />
        </div>
        <div className="task-info">
          <div className="task-day half-div">
            <label htmlFor="task-day">Day</label>
            <input onChange={handleChange} type="date" className="inpt" name="taskDay" value={taskDay} />
          </div>
          <div className="task-time half-div">
            <label htmlFor="task-time">Time</label>
            <input onChange={handleChange} type="time" className="inpt" name="taskTime" value={taskTime} />
          </div>
        </div>
        <button className="btn save-btn" type="button" id="save-btn"
        onClick={(e) => {e.preventDefault(); addTask(taskTitle, taskDay, taskTime)}}>
          <span className="ri-add-fill icon" /> Add Task
        </button>
      </form>
  );
};

export default AddTodo;
