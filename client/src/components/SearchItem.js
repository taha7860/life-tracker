import '../styles/Food.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function SearchItem(props) {
    return (
        <li className="item-container">
            <button className='add-item' onClick={() => {
                props.setIsAddingFood(false);
                props.setIsAdding(true);
                props.addFood(props.calories, props.protein, props.carbs, props.fat, props.serving);
            }}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
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
}

export default SearchItem;