import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import {Button} from '@material-ui/core'

const ThankYouForm = () => {


    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/');
        console.log('inside handleSubmit in thankyou');
    }

    return(
        <div className="thankyou">
            <h2>Feedback Complete!</h2>
            <h1>Thank you! </h1>
            <Button className="buttonField" variant="outlined" onClick={handleSubmit}>Leave New Feedback?</Button>
        </div>
    )
}

export default ThankYouForm; 