import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import {Link} from 'react-router-dom';
// React bootstrap
import Button from 'react-bootstrap/Button'; 
import Form from 'react-bootstrap/Form'; 
import Card from 'react-bootstrap/Card';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'bootstrap';
//material-ui

function FeelingForm( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );
    const [feeling, setFeeling] = useState(5);
    const dispatch = useDispatch();

    const getFeeling = event => {
        console.log('in getFeeling', event.target.value);
        setFeeling(event.target.value);
    }

    const addFeeling = event => {
        dispatch({
            type: 'ADD_FEELING',
            payload: feeling
        })
    }

    return(
        <div>
            <h1>How are you feeling today?</h1>
      
           <Form.Select aria-label="Default select example" value={feeling} onChange={getFeeling}>
                <option>Choose a value 1-5</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                </Form.Select> 

                <Button variant="primary" onClick={addFeeling}>
                <Link to="/Understanding">Next</Link>
            </Button>

        </div>
    )
           
            }
export default FeelingForm;
              
                
                    