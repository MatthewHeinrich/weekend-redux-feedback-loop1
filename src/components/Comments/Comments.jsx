import {Link} from 'react-router-dom';

function Comments() {
    
    
    return(
        <>
        <h2>Any comments you want to leave?</h2>
        <input type="text"></input>
        <Link to="/Review">
        <button>Next</button>
        </Link>
        
        </>
    )
}

export default Comments;