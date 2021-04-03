import {Link} from 'react-router-dom';

function Home() {
    return(
        <>
            <h1>Give us your feedback!</h1>
            
            <Link to='/Feeling'>
            <button>Start Feedback</button>
            </Link>
        </>
    )
}

export default Home;