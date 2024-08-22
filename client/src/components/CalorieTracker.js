import Meal from "./Meal";
import { useState } from "react";
import '../styles/CalorieTracker.css';
import { nanoid } from "nanoid";

function CalorieTracker() {
  const [count, setCount] = useState(0);

  const breakfastList = [];
  const lunchList = [];
  const dinnerList = [];

  return (
    <main>
      <Meal id={'meal-' + nanoid()} name="BREAKFAST" foodList={breakfastList}/>
      <Meal id={'meal-' + nanoid()} name="LUNCH" foodList={lunchList}/>
      <Meal id={'meal-' + nanoid()} name="DINNER" foodList={dinnerList}/>
      <h1 className="calories">{count}</h1>
    </main>
  );
  }
  
  export default CalorieTracker;