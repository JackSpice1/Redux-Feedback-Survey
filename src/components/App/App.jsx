import React from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowswerRouter} from "react-router-dom";

//components
import FeelingForm from '../FeelingForm/FeelingForm';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      
    <div>
      <FeelingForm/>
    </div>
     </div>
  );
}

export default App;
