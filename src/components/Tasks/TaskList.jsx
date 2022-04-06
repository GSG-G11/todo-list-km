import React from 'react'

const TaskList = ({ tasks, deleteHandler, openEdit, completeHandler }) => {
  let res = tasks;
  return (
    <>
      <ul className='tasks-list'>
        {res
          .sort((a, b) => a.id - b.id)
          .map((task) => (
            <li
              className={`single-task ${task.isDone ? 'completed' : ''}`}
              data-id={task.id}
              key={task.id}>
              <button
                className='done-btn'
                data-id='status'
                onClick={() => completeHandler(task.id)}>
                <span className='not-done-icon ri-checkbox-blank-circle-line icon' />
                <span className='done-icon ri-checkbox-circle-line icon' />
              </button>
              <div className='task-details'>
                <p className='task-name'>{task.title}</p>
                <div className='day-time'>
                  <p className='day'>
                    <span className='ri-calendar-line icon' />
                    <span className='value day'>{task.day}</span>
                  </p>
                  <p className='time'>
                    <span className='ri-time-line icon' />
                    <span className='value day'>{task.time}</span>
                  </p>
                </div>
              </div>
              <button
                className='edit-btn'
                data-id='edit'
                onClick={() => openEdit(task)}>
                <span className='trash-icon ri-pencil-line icon' />
              </button>
              <button
                className='trash-btn'
                data-id='delete'
                onClick={() => deleteHandler(task.id)}>
                <span className='trash-icon ri-delete-bin-6-line icon' />
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default TaskList
