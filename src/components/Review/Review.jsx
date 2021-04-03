import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function Review(props) {

    const sendFeedbackInfo = () =>{


        
    }           

    const feedbackReview = useSelector( ( store ) =>{
        console.log(store.feedbackData);
        return store.feedbackData;
        
    })

    
        
    return(
        <>
        
            <h2>Review</h2>
            <div>
                {feedbackReview.map((review) =>(
                    
                    <h3>{review.feeling}
                    {review.understanding}
                    {review.support}
                    {review.comment}</h3>
                    
                ))}
            </div>
        </>
    )
}

export default Review;