import '../styles/ToDoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function SideToDoItem(props) {
    const [isEditingSideTask, setIsEditingSideTask] = useState(false);
    const [newName, setNewName] = useState(props.name);

    const todoEdit = (
        <div className="edit-container">
            <FontAwesomeIcon icon={faEdit} className="edit" onClick={() => setIsEditingSideTask(true)}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTrashAlt} className="delete" onClick={() => props.deleteTask(props.id)}></FontAwesomeIcon>
        </div>
    );

    const todoItem = (
        <div className="side-todo-item">
            <div className="checkbox-container">
                <input type='checkbox' id={props.id} onClick={() => props.toggleCompleted(props.id)}></input>
                <label for={props.id}></label>
            </div>
            <div className="todo-container">
                <section>{props.name}</section>
            </div>
            {!props.completed && todoEdit}
        </div>
    );

    const editItem = (
        <div className="input">
            <h5>Edit time and task name: </h5>
            <section className="set-task">
                <textarea onChange={(e) => setNewName(e.target.value)}>{newName}</textarea>
            </section>
            <div className="confirm">
                <div>
                    <FontAwesomeIcon icon={faCheck} className="tick" onClick={() => {props.editTask(props.id, newName); setIsEditingSideTask(false);}}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faXmark} className="cross" onClick={() => setIsEditingSideTask(false)}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )


    return (
        <li className={props.completed ? 'completed' : ''}>
            {isEditingSideTask ? editItem : todoItem}
        </li>
    );
}

export default SideToDoItem;