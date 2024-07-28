import '../styles/ToDo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function ToDo() {
  return (
    <main>
      <section className="plan">
          <h2>Plan your day</h2>
          <button className="add"><FontAwesomeIcon icon={faPlus}/> <span>Add</span></button>
      </section>
      <section className="tasks">
          <h3>Tasks:</h3>
          <button className="add"><FontAwesomeIcon icon={faPlus}/> <span>Add</span></button>
      </section>
    </main>
  );
  }
  
  export default ToDo;