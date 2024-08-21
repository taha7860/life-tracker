import '../styles/Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import SearchItem from './SearchItem';

function Meal({name}) {
    // function getID(query) {
    //     const URL = `https://api.spoonacular.com/food/search?query=${query}&number=2&apiKey=${apiKey}`;
    //     fetch(URL)
    //     .then(response => response.json())
    //     .then(data => {
    //         const searchResults = data.searchResults;
    //         searchResults.forEach(result => {
    //             result.results.forEach(item => {
    //                 const id = item.id;
    //                 const name = item.name;
    //                 const image = item.image;

    //                 getNutrients(id, name, image);
    //             })
    //         });
    //     })
    //     .catch(() => {
    //         const msg = document.querySelector('.search-bar .msg');
    //         msg.content = "Oops! Couldn't find what you were looking for...";
    //     });
    // }

    // function getNutrients(id, name, image) {
    //     const URL = `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}`;
    //     fetch(URL)
    //     .then(response => {
    //         if (!response.ok) {
    //             return new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         const {calories, carbs, fat, protein} = data;
    //         const search = { 
    //             name, 
    //             image, 
    //             calories: calories, 
    //             carbs: carbs, 
    //             fat: fat, 
    //             protein: protein 
    //         };
    //         setSearches(prevSearches => [...prevSearches, search]);
    //     })
    //     .catch(error => console.error('Error fetching data:', error));
    // }

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
            console.log(foods);

            const updatedSearches = foods.map((search) => {
                const getNutrient = (name) => {
                    const nutrient = search.foodNutrients.find((nutrient) => nutrient.nutrientName === name);
                    return nutrient ? nutrient.value : '';
                }

                return { 
                    name: search.description.toLowerCase(),
                    calories: getNutrient('Energy'), 
                    carbs: getNutrient('Carbohydrate, by difference'), 
                    fat: getNutrient('Total lipid (fat)'), 
                    protein: getNutrient('Protein')
                }
            })
            setSearches(updatedSearches);
        } catch (error) {
            console.log('Error fetching nutrition data: ', error);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        makeSearch(query);
    }

    // const apiKey = '2a44266d901d48538ff2008dd09279e5';

    const [maxResults, setMaxResults] = useState(20);
    const [isAddingFood, setIsAddingFood] = useState(false);
    const [query, setQuery] = useState('');
    const [searches, setSearches] = useState([]);

    const searchList = searches?.map((search) => (
        <SearchItem
            name={search.name}
            calories={search.calories}
            carbs={search.carbs}
            fat={search.fat}
            protein={search.protein}
        />
    ))

    const foodForm = (
        <div className="search-food">
            <form className="search-bar" onSubmit={handleSubmit}>
                <input type='search' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search...'></input>
                <button type='submit'>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </button>
                <div className="msg"></div>
            </form>
            <ul>
                {searchList}
            </ul>
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