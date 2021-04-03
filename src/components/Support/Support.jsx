import { useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';

function Support () {

    const dispatch = useDispatch();
    
    let [support, setSupport] = useState('');
    
    const addSupportInfo = () =>{
        
        const addSupport={
            support: support
        }
        dispatch({ type: 'feedback', payload: addSupport})
    }
    
    return(
        <>
        <h2>How well are you being supported?</h2>
        <p>Understanding between 1-10</p>
        <input type="number" min="1" max="10" onChange={(event)=>setSupport(event.target.value)}></input>
        <Link to="/Comments">
        <button onClick={addSupportInfo}>Next</button>
        </Link>
        </>
    )
}

export default Support;