import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import {Link} from 'react-router-dom';
// React bootstrap
import Button from 'react-bootstrap/Button'; 
import Form from 'react-bootstrap/Form'; 


function UnderstandingForm( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );

    const [understanding, setUnderstanding] = useState(5);
    const dispatch = useDispatch();

    const getUnderstanding = event => {
        console.log('in getUnderstanding', event.target.value);
        setUnderstanding(event.target.value);
    }

    const addUnderstanding= event => {
        dispatch({
            type: 'ADD_FEEDBACK',
            payload: understanding
        })
    }

    return(
        <div>
            <h1>How well are you understanding the content?</h1>
            <Form.Select aria-label="Default select example" value={understanding} onChange={getUnderstanding}>
                <option>Choose a value 1-5</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                </Form.Select>
                
            <Button variant="primary" onClick={addUnderstanding}>
                <Link to="/support">Next</Link>
            </Button>
        </div>
    )
}
export default UnderstandingForm;