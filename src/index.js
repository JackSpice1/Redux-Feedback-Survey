import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'; 
import{ createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

//reducers
//reducers must be pure functions, given any input, output must be the same 
// an action is DISPATCHED and recieved by a reducer, the reducer's job is to return the changed state

const feedback = (state = [], action)=>{
    console.log('hello world from a reducer! Action:', action);
    if (action.type === 'ADD_FEEDBACK'){
        return [...state, action.payload];
    }
    return state;
}

//store
//where global state is stored so that it can be shared w/ all components 
const storeInstance = createStore(
    combineReducers(
        {
            feedback 
        }
    ),
    applyMiddleware(logger)
)

//provider (lets redux and react talk w/ one another)
ReactDOM.render(
<Provider store={storeInstance}><App /></Provider>, 
document.getElementById('root'));
registerServiceWorker();
