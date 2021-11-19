import React from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Router, Routes, Route} from "react-router-dom";

//components
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentsForm from '../CommentsForm/CommentsForm';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

  <BrowserRouter>
    <Routes>

      <Route path='/' element={<FeelingForm/>}></Route>
      <Route path='/understanding' element={<UnderstandingForm/>}></Route>
      <Route path='/support' element={<SupportForm/>}></Route>
      <Route path='/comments' elements={<CommentsForm/>}></Route>

    </Routes>
    </BrowserRouter>
   
   
     </div>
  );
}

export default App;
