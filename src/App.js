import React, { Component } from 'react'
import AddForm from './components/Forms/AddForm';
import TopForms from './components/Forms/TopForms';
import HeaderPage from './components/HeaderPage';
import TaskList from './components/Tasks/TaskList';
import NoTasks from './components/NoTasks';

// Import CSS
import './App.css';
import 'remixicon/fonts/remixicon.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskTitle: '',
      taskDay: '',
      taskTime: '',
      openAdd: false,
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
  }

  toggleBtn = (e) => {
    this.setState((prevState) => {
      return { openAdd: !prevState.openAdd };
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addTask(title, day, time) {
    const task = {
      id: Date.now(),
      title: title,
      day: day,
      time: time,
      isDone: false,
    };
    this.setState((prevState) => {
      return {
        tasks: [...prevState.tasks, task],
        taskTitle: '',
        taskDay: '',
        taskTime: '',
      };
    });
    this.toggleBtn();
  }

  render() {
    const { taskTitle, taskDay, taskTime, openAdd, tasks } = this.state;
    return (
      <div className='container'>
        <HeaderPage />
        <main className='page-main'>
          <section className='add-sec'>
            <TopForms toggleBtn={this.toggleBtn} openAdd={openAdd} />

            <AddForm
              task={{ taskTitle, taskTime, taskDay }}
              handleChange={this.handleChange}
              addTask={this.addTask}
              openAdd={openAdd}
            />
          </section>

          <section className='view-sec'>
            {tasks.length ? <TaskList tasks={tasks} /> : <NoTasks />}
          </section>
        </main>
      </div>
    );
  }
}

export default App
