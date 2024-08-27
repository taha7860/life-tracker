import { useState } from 'react';
import '../styles/Food.css';

function FoodItem(props) {
    const [isAddingOrEditing, setIsAddingOrEditing] = useState(true);
    const [added, setAdded] = useState(false);

    const addEditForm = (
        <div className="food-item-form">
            <div className='macros'>
                <div>
                    <h3>Calories:</h3>
                    <h4>{props.calories}kcal</h4>
                </div>
                <ul>
                    <li><span>Protein: {props.protein}g</span></li>
                    <li><span>Carbs: {props.carbs}g</span></li>
                    <li><span>Fat: {props.fat}g</span></li>
                </ul>
            </div>
            <div className='serving'>
                <h5>Serving:</h5>
                <p>{props.serving}</p>
            </div>
            <div className='amount'>
                <h5>Amount:</h5>
                <input type='number'></input>
            </div>
            <div className='item-buttons'>
                <button className='ok' onClick={() => {
                    setIsAddingOrEditing(false);
                    setAdded(true);
                }}>OK</button>
                <button className='cancel' onClick={() => {
                    setIsAddingOrEditing(false);
                    props.setIsAddingFood(true);
                }}>Cancel</button>
            </div>
        </div>
    )

    const foodItem = (
        <li className="item-container added">
            <div className='item-description'>
                <div className='food-name'>{props.name}</div> 
                <p className='nutrients'>
                    Per {props.serving} - 
                    Calories: {props.calories}kcal | 
                    Protein: {props.protein}g | 
                    Carbs: {props.carbs}g | 
                    Fat: {props.fat}g
                </p>
            </div>
        </li>
    );

    return (
        <>
            { added && foodItem }
            { isAddingOrEditing && addEditForm }
        </>
    )
}

export default FoodItem;