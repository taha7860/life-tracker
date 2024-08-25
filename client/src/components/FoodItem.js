import '../styles/Food.css';

function FoodItem(props) {
    return (
        <div className="food-item">
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
                <button className='ok'>OK</button>
                <button className='cancel'>Cancel</button>
            </div>
        </div>
    )
}

export default FoodItem;