import '../styles/ToDoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function ToDoItem(props) {


    return (
        <li className="todo-item">
            <div className="checkbox-container">
                <input type='checkbox' id={props.id}></input>
                <label for={props.id}></label>
            </div>
            <div className="todo-container">
                <section>{props.name}</section>
                <section><FontAwesomeIcon icon={faClock} className="clock"></FontAwesomeIcon> {props.startTime} - {props.endTime}</section>
            </div>
            <div className="edit-container">
                <FontAwesomeIcon icon={faEdit} className="edit"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTrashAlt} className="delete"></FontAwesomeIcon>
            </div>
        </li>
    );
}

export default ToDoItem;