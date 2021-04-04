import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Home() {
    return(
        <>
            <h1>Give us your feedback!</h1>
            
            <Link to='/Feeling'> 
            <Button variant="contained" color="primary">Start Feedback</Button> 
            </Link>
        </> // brings you to /Feeling 
    )
} // end Home 

export default Home;