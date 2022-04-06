import React, { Component } from 'react'
import './App.css'
import AddTodo from './components/addtodo'
let tasks = []

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskTitle: '',
      taskDay: '',
      taskTime: '',
    }
    this.addTask = this.addTask.bind(this)
  }
  handleChange = (e) => {
    this.setState({
      taskTitle: e.target.value,
    })
  }
  addTask(task, day, time) {
    const obj = {
      id: Date.now(),
      title: task,
      day: day,
      time: time,
      isDone: false,
    }

    tasks.push(obj)
    console.log(tasks)
  }

  render() {
    return (
      <div>
        <h1>ToDo App in ReactJS</h1>
        <AddTodo
          task={{ taskTitle: this.state.taskTitle, taskTime: this.state.taskTime,
            taskDay: this.state.taskDay
          }}
          handleChange={this.handleChange}
          addTask={this.addTask}
        />
      </div>
    )
  }
}

export default App
