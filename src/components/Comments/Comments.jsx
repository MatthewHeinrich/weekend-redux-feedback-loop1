import { useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';

function Comments() {
    
    const dispatch = useDispatch();

let [comments, setComment] = useState('');

const addCommentInfo = () =>{
    
    const addComment={
        comments: comments
    }
    dispatch({ type: 'feedback', payload: {propertyName: 'comments', value: addComment.comments} })
}
    
    return(
        <>
        <h2>Any comments you want to leave?</h2>
        <input type="text" onChange={(event)=> setComment(event.target.value)}></input>
        <Link to="/Review">
        <button onClick={addCommentInfo}>Next</button>
        </Link>
        
        </>
    )
}

export default Comments;