import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom'
import axios from 'axios';
import {Button} from '@material-ui/core'
import {useNavigate} from 'react-router-dom';


function ReviewForm () {

    const feedback = useSelector(store => store.feedback);
    // const history = useHistory();
    const navigate = useNavigate();
    navigate('/')


    function addFeedback(){
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        })
        .then((response)=>{
            console.log('Added 1 new feedback survey', response);
        })
        .catch((error)=>{
            alert(`Sorry, your survey was not added`);
            console.log('error adding survey', error); 
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        navigate('/thankyou');
        addFeedback();
        console.log('inside review handleSubmit');
    }


    return (
        <div className="container">
            <h1>Review Your Feedback</h1>
            <div>
                <p>Feelings: {feedback.feeling}</p>
                <p>Understanding: {feedback.understanding}</p>
                <p>Support: {feedback.support}</p>
                <p>Comments: {feedback.comments}</p>
                <Button className="buttonField" variant="outlined" onClick={handleSubmit}>Submit</Button>
            </div>
           
        </div>

    );
};

export default ReviewForm;