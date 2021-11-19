import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import {Link} from 'react-router-dom';
// React bootstrap
import Button from 'react-bootstrap/Button'; 
import FloatingLabel from 'react-bootstrap/FloatingLabel'; 


function CommentsForm( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );

    const [comments, setComments] = useState(5);
    const dispatch = useDispatch();

    const getComments = event => {
        console.log('in getComments', event.target.value);
        setComments(event.target.value);
    }

    const addComments = event => {
        dispatch({
            type: 'ADD_FEEDBACK',
            payload: comments
        })
    }

    return(
        <div>
            <h1>Any comments you would like to leave?</h1>
            <FloatingLabel 
            controlId={'comments'}
            variant={'outlined'}
            label="Leave any open-ended feedback here"
            margin={'normal'}
            className="mb-3"
            InputLabelProps={{ shrink: true}}
            onChange={(event)=>getComments (event)}/>
                
            <Button variant="primary" onClick={addComments}>
                <Link to="/review">Next</Link>
            </Button>
        </div>
    )
}

export default CommentsForm;