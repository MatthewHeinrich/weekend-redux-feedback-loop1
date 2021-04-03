import {Link} from 'react-router-dom';

function Support () {
    
    return(
        <>
        <h2>How well are you being supported?</h2>
        <p>Understanding between 1-10</p>
        <input type="number" min="1" max="10"></input>
        <Link to="/Comments">
        <button>Next</button>
        </Link>
        </>
    )
}

export default Support;