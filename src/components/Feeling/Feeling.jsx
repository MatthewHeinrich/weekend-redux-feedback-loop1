import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';

function Feeling() {

const dispatch = useDispatch();

let [feeling, setFeeling] = useState('');

const addFeelingInfo = () =>{
    
    const addFeeling={
        feeling: feeling
    }
    dispatch({ type: 'feedback', payload: addFeeling})
}

    return(
        <>
        <h2>How are you feeling today?</h2>
        <p>Feeling between 1-10</p>
        <input type="number" min="1" max="10" onChange={(event)=> setFeeling(event.target.value)}></input><br></br>
        <Link to="/Understanding">
        <button onClick={addFeelingInfo}>Next</button>
        </Link>
        </>
    )
}

export default Feeling;