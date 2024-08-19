import '../styles/Food.css';

function SearchItem(props) {
    return (
        <div className="item-container">
            <p>Food: {props.name} {props.calories}</p>
        </div>
    );
}

export default SearchItem;