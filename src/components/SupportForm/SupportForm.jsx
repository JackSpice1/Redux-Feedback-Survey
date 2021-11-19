import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import {Link} from 'react-router-dom';
// React bootstrap
import Button from 'react-bootstrap/Button'; 
import Form from 'react-bootstrap/Form'; 


function SupportForm( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );

    const [support, setSupport] = useState(5);
    const dispatch = useDispatch();

    const getSupport = event => {
        console.log('in getSupport', event.target.value);
        setSuppot(event.target.value);
    }

    const addSupport = event => {
        dispatch({
            type: 'ADD_FEEDBACK',
            payload: support
        })
    }

    return(
        <div>
            <h1>How well are you being supported?</h1>
            <Form.Select aria-label="Default select example" value={support} onChange={getSupport}>
                <option>Choose a value 1-5</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                </Form.Select>
                
            <Button variant="primary" onClick={addSupport}>
                <Link to="/comments">Next</Link>
            </Button>
        </div>
    )
}

export default SupportForm;