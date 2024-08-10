import '../styles/ToDoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function ToDoItem(props) {
    const [isEditingTask, setIsEditingTask] = useState(false);
    const [newName, setNewName] = useState(props.name);
    const [newStartTime, setNewStartTime] = useState(props.startTime);
    const [newEndTime, setNewEndTime] = useState(props.endTime);

    const todoItem = (
        <div className="todo-item">
            <div className="checkbox-container">
                <input type='checkbox' id={props.id} onClick={() => props.toggleCompleted(props.id)}></input>
                <label for={props.id}></label>
            </div>
            <div className="todo-container">
                <section>{props.name}</section>
                <section><FontAwesomeIcon icon={faClock} className="clock"></FontAwesomeIcon> {props.startTime} - {props.endTime}</section>
            </div>
            <div className="edit-container">
                <FontAwesomeIcon icon={faEdit} className="edit" onClick={() => setIsEditingTask(true)}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTrashAlt} className="delete" onClick={() => props.deleteTask(props.id)}></FontAwesomeIcon>
            </div>
        </div>
    );

    const editItem = (
        <div className="input">
            <h5>Edit time and task name: </h5>
            <section className="set-task">
                <input type="time" className="start-time" value={newStartTime} onChange={(e) => setNewStartTime(e.target.value)}></input>
                -
                <input type="time" className="end-time" value={newEndTime} onChange={(e) => setNewEndTime(e.target.value)}></input>
                <textarea onChange={(e) => setNewName(e.target.value)}>{newName}</textarea>
            </section>
            <div className="confirm">
                <div>
                <FontAwesomeIcon icon={faCheck} className="tick" onClick={() => {props.editTask(props.id, newName, newStartTime, newEndTime); setIsEditingTask(false);}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faXmark} className="cross" onClick={() => setIsEditingTask(false)}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )


    return (
        <li className={props.completed ? 'completed' : ''}>
            {isEditingTask ? editItem : todoItem}
        </li>
    );
}

export default ToDoItem;