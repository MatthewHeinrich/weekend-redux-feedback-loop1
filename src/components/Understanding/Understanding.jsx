import {Link} from 'react-router-dom';

function Understanding() {

    return(
        <>
        <h2>How well are you understanding the content?</h2>
        <p>Understanding between 1-10</p>
        <input type="number" min="1" max="10"></input>
        <Link to="/Support">
        <button>Next</button>
        </Link>
        </>
    )
}

export default Understanding;