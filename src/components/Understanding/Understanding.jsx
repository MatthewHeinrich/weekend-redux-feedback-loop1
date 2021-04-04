import {useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Understanding() {

    const dispatch = useDispatch();

let [understanding, setUnderstanding] = useState('');



    const addUnderstandingInfo = () =>{

        if( understanding === ''){
            alert('Please provide a score')
        } else{
            alert('Understanding Submitted')
        const addUnderstanding={
            understanding: Number.parseInt(understanding)
        }
        dispatch({ type: 'feedback', payload: {propertyName: 'understanding', value: addUnderstanding.understanding}})
        }
    } // end addUnderstandingInfo 

    return( // renders DOM elements  
        <>
        <h2>How well are you understanding the content?</h2>
        <p>Understanding between 1-10</p>
        <input id="understandInput" type="number" min="1" max="10" onChange={(event)=>setUnderstanding(event.target.value)}></input>
        <Button id="understandButton" variant="contained" color="primary" onClick={addUnderstandingInfo}>Submit</Button>
    
        <Link to="/Support">
            <Button variant="contained" color="primary">Next</Button>
        </Link>
        </>
    ) // end return 
} // end Understanding 

export default Understanding;