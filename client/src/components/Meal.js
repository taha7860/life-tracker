import '../styles/Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import SearchItem from './SearchItem';
import { nanoid } from 'nanoid';
import FoodItem from './FoodItem';

function Meal(props) {
    async function makeSearch(query) {
        const apiKey = 'tBa0jpWWxDjcAyWznl4uu8W1cvWrYgEQkbulz8Zb';
        const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${query}`;

        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();

            const foods = data.foods.slice(0, maxResults);

            const updatedSearches = foods.map((search) => {
                const getNutrient = (name) => {
                    const nutrient = search.foodNutrients.find((nutrient) => nutrient.nutrientName === name);
                    return nutrient ? nutrient.value : 0;
                }

                return { 
                    name: search.dataType === 'Branded' ? search.description.toLowerCase() + ` (${search.foodCategory})` : search.description.toLowerCase(),
                    id: `search-${nanoid()}`,
                    serving: search.householdServingFullText ? search.householdServingFullText.toLowerCase() : '100g',
                    calories: getNutrient('Energy'), 
                    carbs: getNutrient('Carbohydrate, by difference'), 
                    fat: getNutrient('Total lipid (fat)'), 
                    protein: getNutrient('Protein')
                }
            });
            setSearches(updatedSearches);
        } catch (error) {
            console.log('Error fetching nutrition data: ', error);
        }
    }

    function addFood(name, calories, protein, carbs, fat, serving) {
        const foodItem = { name, calories, protein, carbs, fat, serving, id: `food-${nanoid()}` };
        setFoods([...foods, foodItem]);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setMaxResults(20);
        makeSearch(query);
    }

    const [maxResults, setMaxResults] = useState(20);
    const [isAddingFood, setIsAddingFood] = useState(false);
    const [query, setQuery] = useState('');
    const [searches, setSearches] = useState([]);
    const [foods, setFoods] = useState([]);

    const foodList = foods?.map((food) => (
        <FoodItem
            name={food.name}
            id={food.id}
            serving={food.serving}
            calories={food.calories}
            carbs={food.carbs}
            fat={food.fat}
            protein={food.protein}
            setIsAddingFood={setIsAddingFood}
        />
    ))

    const searchList = searches?.map((search) => (
        <SearchItem
            name={search.name}
            id={search.id}
            serving={search.serving}
            calories={search.calories}
            carbs={search.carbs}
            fat={search.fat}
            protein={search.protein}
            setIsAddingFood={setIsAddingFood}
            addFood={addFood}
        />
    ));

    const searchMore = (
        <button onClick={() => {
            setMaxResults(maxResults + 20);
            makeSearch(query);
        }} className='search-more'>Search more...</button>
    );

    const foodForm = (
        <div className="search-food">
            <div className='close-form' onClick={() => setIsAddingFood(false)}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></div>
            <form className="search-bar" onSubmit={handleSubmit}>
                <input type='search' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search...'></input>
                <button type='submit'>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </button>
                <div className="msg"></div>
            </form>
            <ul className='search-results'>
                {searchList}
                { searchList.length > 0 && maxResults <= 60 && searchMore }
            </ul>
        </div>
    );

    return (
        <section>
            <h3 className='header fitness'>{props.name}</h3>
            <ul className='food-list'>
                {foodList}
            </ul>
            <button className="add" onClick={() => setIsAddingFood(true)}><FontAwesomeIcon icon={faPlus}/> <span>Add</span></button>
            { isAddingFood && foodForm }
        </section>
    );
}

export default Meal;