import Meal from "./Meal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import '../styles/CalorieTracker.css';
import { nanoid } from "nanoid";

function CalorieTracker() {
  const [exercises, setExercises] = useState([]);
  const [count, setCount] = useState(0);

  const exerciseList = [];

  return (
    <main>
      <Meal id={'meal-' + nanoid()} name="BREAKFAST"/>
      <Meal id={'meal-' + nanoid()} name="LUNCH"/>
      <Meal id={'meal-' + nanoid()} name="DINNER"/>
      <div>
        <h3 className="header fitness">Exercise:</h3>
        {exerciseList}
        <button className="add"><FontAwesomeIcon icon={faPlus}/> <span>Add</span></button>
      </div>
      <h1 className="calories">{count}</h1>
    </main>
  );
  }
  
  export default CalorieTracker;