import React, { Component } from 'react'
import AddForm from './components/Forms/AddForm'
import TopForms from './components/Forms/TopForms'
import HeaderPage from './components/HeaderPage'
import TaskList from './components/Tasks/TaskList'
import NoTasks from './components/NoTasks'

// Import CSS
import './App.css'
import 'remixicon/fonts/remixicon.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskTitle: '',
      taskDay: '',
      taskTime: '',
      openAdd: false,
      editMode: false,
      thisTask: '',
      tasks: [],
    };
  }

  toggleBtn = (e) => {
    this.setState((prevState) => {
      return { openAdd: !prevState.openAdd, editMode: false, taskTime: '', taskTitle: '', taskDay: ''};
    });
  };

  openEdit = (task) => {
    this.setState({openAdd: true, editMode: true, thisTask: task.id,  taskTitle: task.title, taskDay: task.day, taskTime: task.time})
    // this.editHandler(task.id);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addTask = (title, day, time) => {
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
  };

  completeHandler = (taskId) => {
    let tasks = this.state.tasks;
    tasks.forEach((task) =>
      task.id === taskId ? (task.isDone = !task.isDone) : true
    );
    this.setState({ tasks: tasks });
  };
  
  editHandler = (taskId) => {
    let {tasks, taskTitle, taskDay, taskTime} = this.state
    let thisTask = tasks.filter((task) => task.id === taskId);
    thisTask[0].title = taskTitle;
    thisTask[0].day = taskDay;
    thisTask[0].time = taskTime;
    this.setState({ tasks: tasks, openAdd: false, editMode: false });
  };

  deleteHandler = (taskId) => {
    this.setState((prevState) => {
      return { tasks: prevState.tasks.filter((task) => task.id !== taskId) };
    });
  };

  render() {
    const { taskTitle, taskDay, taskTime, openAdd, tasks, editMode, thisTask } =
      this.state;
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
              editMode={editMode}
              editHandler={this.editHandler}
              thisTask={thisTask}
            />
          </section>

          <section className='view-sec'>
            {tasks.length ? (
              <TaskList
                tasks={tasks}
                deleteHandler={this.deleteHandler}
                completeHandler={this.completeHandler}
                openEdit={this.openEdit}
              />
            ) : (
              <NoTasks />
            )}
          </section>
        </main>
      </div>
    );
  }
}

export default App
