import {useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';

function Understanding() {

    const dispatch = useDispatch();

let [understanding, setUnderstanding] = useState('');

const addUnderstandingInfo = () =>{
    
    const addUnderstanding={
        understanding: understanding
    }
    dispatch({ type: 'feedback', payload: addUnderstanding})
}

    return(
        <>
        <h2>How well are you understanding the content?</h2>
        <p>Understanding between 1-10</p>
        <input type="number" min="1" max="10" onChange={(event)=>setUnderstanding(event.target.value)}></input>
        <Link to="/Support">
        <button onClick={addUnderstandingInfo}>Next</button>
        </Link>
        </>
    )
}

export default Understanding;