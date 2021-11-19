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
            type: 'ADD_COMMENTS',
            payload: comments
        })
    }

    return(
        <div>
            <h1>Any comments you would like to leave?</h1>
            <div className = "inputFields">
                <br />
                <input
                className="inputs"
                placeholder="write any open ended feedback here"
                value={comments}
                onChange={(event)=> setComments(event.target.value)}></input>
            </div>
                
            <Button variant="primary" onClick={addComments}>
                <Link to="/review">Next</Link>
            </Button>
        </div>
    )
}

export default CommentsForm;