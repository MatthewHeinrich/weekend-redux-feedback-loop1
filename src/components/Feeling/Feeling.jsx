import {Link} from 'react-router-dom';

function Feeling() {
    return(
        <>
        <h2>How are you feeling today?</h2>
        <p>Feeling between 1-10</p>
        <input type="number" min="1" max="10"></input>
        <Link to="/Understanding">
        <button>Next</button>
        </Link>
        </>
    )
}

export default Feeling;