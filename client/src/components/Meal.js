import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Meal({name}) {
    return (
        <section>
            <h3>{name}</h3>
            <button className="add"><FontAwesomeIcon icon={faPlus}/> <span>Add</span></button>
        </section>
    );
}

export default Meal;