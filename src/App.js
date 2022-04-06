import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/addtodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      items: [],
      isDone: false,
    };
    this.addTask = this.addTask.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  addTask(input) {
    const obj = {
      id: Date.now(),
      content: input,
      isDone: this.state.isDone
    };
    console.log(obj);
    this.setState({ items: [...this.state.items, obj] });
    console.log([...this.state.items, obj]);
  }

  render() {
    return (
      <div>
        <h1>ToDo App in ReactJS</h1>
        <AddTodo
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          addTask={this.addTask}
        />
      </div>
    );
  }
}

export default App;