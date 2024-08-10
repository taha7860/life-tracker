import '../styles/ToDo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ToDoItem from './ToDoItem';
import { nanoid } from 'nanoid';

function ToDo() {
  function addTask(name, startTime, endTime) {
    const newTask = { name, startTime, endTime, id: `todo-${nanoid()}`, completed: false};
    setTasks([...tasks, newTask]);
    document.querySelector('textarea').value = '';
  }

  function toggleCompleted(id) {
    const toggledTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    })
    setTasks(toggledTasks);
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function editTask(id, newName, newStartTime, newEndTime) {
    const editedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: newName, startTime: newStartTime, endTime: newEndTime };
      }
      return task;
    })
    setTasks(editedTasks);
  }

  const [tasks, setTasks] = useState([]);
  const tasksList = tasks?.map((task) => (
    <ToDoItem 
      name={task.name}
      startTime={task.startTime}
      endTime={task.endTime}
      id={task.id}
      completed={task.completed}
      toggleCompleted={toggleCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const [addingTask, setAddingTask] = useState(false)

  const addButton = (
    <button className="add" onClick={() => setAddingTask(true)}>
      <FontAwesomeIcon icon={faPlus}/> <span>Add</span>
    </button>
  );
  const inputField = (
    <div className="input">
      <h5>Set time and task name: </h5>
      <section className="set-task">
        <input type="time" className="start-time"></input>
        -
        <input type="time" className="end-time"></input>
        <textarea></textarea>
      </section>
      <div className="confirm">
        <div>
          <FontAwesomeIcon icon={faCheck} className="tick" onClick={() => addTask(document.querySelector('textarea').value, document.querySelector('.start-time').value, document.querySelector('.end-time').value)}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faXmark} className="cross" onClick={() => setAddingTask(false)}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );

  return (
    <main>
      <h2>Plan your day</h2>
      <section className="plan">
          <h4>Set time based work:</h4>
          <ul>
            {tasksList}
          </ul>
          {addingTask ? inputField : addButton}
      </section>
      <section className="tasks">
          <h4>Side tasks:</h4>
          <button className="add"><FontAwesomeIcon icon={faPlus}/> <span>Add</span></button>
      </section>
    </main>
  );
  }
  
  export default ToDo;