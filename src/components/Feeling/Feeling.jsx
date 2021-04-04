import { useState } from "react";
import { render } from "react-dom";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';



function Feeling() {

const dispatch = useDispatch();

let [feeling, setFeeling] = useState('');
const [show, setShow] = useState(true);


const addFeelingInfo = () =>{
    if( feeling === ''){
        alert('Please provide a score')
    } else{
        alert('Feeling Submitted')
        const addFeeling={
            feeling: Number.parseInt(feeling)
        }
        dispatch({ type: 'feedback', payload: {propertyName: 'feeling', value: addFeeling.feeling } } );
    }
}



    return(
        <form type="submit">
            <h2>How are you feeling today?</h2>
            <p>Feeling between 1-10</p>
            <input id="feelingInput" type="number" min="1" max="10"  onChange={(event)=> setFeeling(event.target.value)} />
            <Button id="feelingButton" variant="contained" color="primary" onClick={addFeelingInfo} > Submit </Button>
            <Link to='/Understanding'>
                <Button variant="contained" color="primary"> Next </Button>
            </Link>
                
            <script >
                
            </script>
            
        </form>
    )
}

export default Feeling;