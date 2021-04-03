import { useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';


function Feeling() {

const dispatch = useDispatch();

let [feeling, setFeeling] = useState('');

const addFeelingInfo = () =>{
    
    const addFeeling={
        feeling: Number.parseInt(feeling)
    }
    dispatch({ type: 'feedback', payload: {propertyName: 'feeling', value: addFeeling.feeling } } );
}



    return(
        <form type="submit">
            <h2>How are you feeling today?</h2>
            <p>Feeling between 1-10</p>
            <input required type="number" min="1" max="10"  onChange={(event)=> setFeeling(event.target.value)} />
            <Link to="/Understanding">
            <button type ="submit" onClick={addFeelingInfo} > Next </button>
            </Link>
        </form>
    )
}

export default Feeling;