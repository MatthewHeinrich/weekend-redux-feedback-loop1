import { useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Support () {

    const dispatch = useDispatch();
    
    let [support, setSupport] = useState('');
    
    const addSupportInfo = () =>{
        if( support === ''){
            alert('Please provide a score')
        } else{
            alert('Support Submitted')
        
        const addSupport={
            support: Number.parseInt(support)
        }
        dispatch({ type: 'feedback', payload: {propertyName: 'support', value: addSupport.support}})
        }
    }
    
    return(
        <>
        <h2>How well are you being supported?</h2>
        <p>Understanding between 1-10</p>
        <input id="supportInput" type="number" min="1" max="10" onChange={(event)=>setSupport(event.target.value)}></input>
        <Button id="supportButton" variant="contained" color="primary" onClick={addSupportInfo}>Submit</Button>
        <Link to="/Comments">
        <Button variant="contained" color="primary">Next</Button>
        </Link>
        </>
    )
}

export default Support;