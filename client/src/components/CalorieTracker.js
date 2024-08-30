import Meal from "./Meal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import '../styles/CalorieTracker.css';
import { nanoid } from "nanoid";
import ExerciseItem from "./ExerciseItem";

function CalorieTracker() {
  const [exercises, setExercises] = useState([]);
  const [count, setCount] = useState(0);
  const [isAddingExercise, setIsAddingExercise] = useState(false);

  const exerciseList = exercises?.map((exercise) => (
    <ExerciseItem
      name={exercise.name}
      duration={exercise.duration}
      calories={exercise.calories}
    />
  ));

  const addButton = (
    <button className="add" onClick={() => setIsAddingExercise(true)}><FontAwesomeIcon icon={faPlus}/> <span>Add</span></button>
  );

  const addExerciseForm =(
    <div className="input">
      <h5 className='input-header'>Set time and task name: </h5>
      <section className="set-task">
        
      </section>
      <div className="confirm">
        <div>
          <FontAwesomeIcon icon={faCheck} className="tick" onClick></FontAwesomeIcon>
          <FontAwesomeIcon icon={faXmark} className="cross" onClick={() => setIsAddingExercise(false)}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );

  return (
    <main>
      <Meal id={'meal-' + nanoid()} name="BREAKFAST"/>
      <Meal id={'meal-' + nanoid()} name="LUNCH"/>
      <Meal id={'meal-' + nanoid()} name="DINNER"/>
      <div>
        <h3 className="header fitness">Exercise:</h3>
        <ul>
          {exerciseList}
        </ul>
        { isAddingExercise ? addExerciseForm : addButton }
      </div>
      <h1 className="calories">{count}</h1>
    </main>
  );
  }
  
  export default CalorieTracker;