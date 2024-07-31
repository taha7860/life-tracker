import Meal from "./Meal";
import { useState } from "react";
import '../styles/CalorieTracker.css';

function CalorieTracker() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Meal name="BREAKFAST"/>
      <Meal name="LUNCH"/>
      <Meal name="DINNER"/>
      <h1 className="calories">{count}</h1>
    </main>
  );
  }
  
  export default CalorieTracker;