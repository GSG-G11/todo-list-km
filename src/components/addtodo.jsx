const AddTodo = ({ task:{taskTitle, taskTime, taskDay}, handleChange, addTask }) => {
  console.log(taskTitle);
  return (
    <div>
      <input type="text" value={taskTitle} onChange={handleChange} />
      <button onClick={() => addTask(taskTitle, taskDay, taskTime)}>Add</button>
    </div>
  );
};

export default AddTodo;
