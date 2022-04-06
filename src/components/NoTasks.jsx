import React from 'react';

const NoTasks = () => {
  return (
    <div className='no-item'>
      <div className='image-div'>
        <img src='/img/no-item.svg' alt='no-item' />
      </div>
      <h4 className='title'>Add a New Task</h4>
    </div>
  );
};

export default NoTasks;
