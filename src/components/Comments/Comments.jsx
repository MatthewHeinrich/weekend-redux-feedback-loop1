import { useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Comments() {
    
    const dispatch = useDispatch();

let [comments, setComment] = useState('');

    const addCommentInfo = () =>{

            
        const addComment={
            comments: comments
        }
        dispatch({ type: 'feedback', payload: {propertyName: 'comments', value: addComment.comments} })        
    } // end addCommentInfo 
    
    return( // renders DOM elements 
        <>
        <h2>Any comments you want to leave?</h2>
        <input id="commentInput" type="text" onChange={(event)=> setComment(event.target.value)}></input>
        
        {/* <Button variant="contained" color="primary" onClick={addCommentInfo}>Submit</Button> */}
        <Link to="/Review">
            <Button variant="contained" color="primary" onClick={addCommentInfo}>Next</Button>
        </Link>
        
        </>
    ) // end return 
} // end Comments 

export default Comments;