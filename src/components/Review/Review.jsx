import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Review(props) {

    const history = useHistory();
    const dispatch = useDispatch();

    const feedbackReview = useSelector( ( store ) =>{
        console.log(store.feedbackData);
        return store.feedbackData;
        
    })

    const sendFeedbackInfo = () =>{
        alert('Thanks for the feeback! :)');

        axios({
            method: 'POST',
            url: '/api/feedback',
            data: feedbackReview
        }).then((response) => {
            console.log(response);
            dispatch({type: 'clear-feedback', payload: null})
            history.push('/');
        }).catch((err) => {
            console.log('in POST feedback', err);
        });
        
    }           

    console.log('feedback check', feedbackReview);
        
    return(
        <>
        
            <h2>Review</h2>
            <div>
                
                    
                    <h3>Feeling: {feedbackReview.feeling}</h3>
                    <h3>Understanding: {feedbackReview.understanding}</h3>
                    <h3>Support: {feedbackReview.support}</h3>
                    <h3>Comments: {feedbackReview.comments}</h3>
                    
                
            </div>
            <Button variant="contained" color="primary" onClick={ (event) => sendFeedbackInfo() }>Submit</Button> 
        
        </>
    )// on click of button, save to database, bring to success page, clear data and button for new survey
}

export default Review;