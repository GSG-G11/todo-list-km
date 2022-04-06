import React, { Component } from 'react';

const AddTodo = ({ inputValue, handleChange, addTask }) => {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={() =>addTask(inputValue)}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;