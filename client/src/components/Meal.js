import '../styles/Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import SearchItem from './SearchItem';

function Meal({name}) {
    function getID(query) {
        const URL = `https://api.spoonacular.com/food/search?query=${query}&number=2&apiKey=${apiKey}`;
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            const {id, name, image} = data.searchResults.results;
            console.log(id);
            getNutrients(id, name, image);
        })
        .catch(() => {
            const msg = document.querySelector('.search-bar msg');
            msg.content = "Oops! Couldn't find what you were looking for...";
        });
    }

    function getNutrients(id, name, image) {
        const URL = `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}`;
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            const nutrients = data.nutrients;
            const search = { name, image, calories: nutrients[0].amount, carbs: nutrients[3].amount, fat: nutrients[1].amount, protein: nutrients[8].amount };
            setSearches([...searches, search]);
        })
        .catch(error => console.error('Error fetching data:', error));
    }

    const apiKey = 'd5c1b5772bb84333bdd429e59c1e73e6';
    const [isAddingFood, setIsAddingFood] = useState(false);
    const [query, setQuery] = useState('');
    const [searches, setSearches] = useState([]);

    const searchList = searches?.map((search) => (
        <SearchItem
            name={search.name}
            image={search.image}
            calories={search.calories}
            carbs={search.carbs}
            fat={search.fat}
            protein={search.protein}
        />
    ))

    const foodForm = (
        <div className="search-food">
            <form className="search-bar" onSubmit={(e) => {
                e.preventDefault();
                setQuery(document.querySelector('input[type="search"]').value);
                getID(query);
            }}>
                <input type='search'></input>
                <button type='submit'>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </button>
                <msg></msg>
            </form>
            {searchList}
        </div>
    );

    return (
        <section>
            <h3>{name}</h3>
            <button className="add" onClick={() => setIsAddingFood(true)}><FontAwesomeIcon icon={faPlus}/> <span>Add</span></button>
            { isAddingFood && foodForm }
        </section>
    );
}

export default Meal;