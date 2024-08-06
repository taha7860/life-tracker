import '../styles/ToDoItem.css';

function ToDoItem(props) {
    return (
        <li className="todo-item">
            <div className="checkbox-container">
                <input type='checkbox' id={props.id}></input>
                <label for={props.id}></label>
            </div>
            <div className="todo-container">
                <section>{props.name}</section>
                <section>{props.startTime} - {props.endTime}</section>
            </div>
        </li>
    );
}

export default ToDoItem;