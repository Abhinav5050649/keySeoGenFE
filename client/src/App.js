import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import Scrape from './pages/scrape';
import Generate from './pages/generate';
import Both from './pages/both';

function App() {
  if (!sessionStorage.getItem('isAuthenticated')){
    return (
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
          </Routes>
      </div>
    );
  }else{
    return(
      <div className="App">
          <Routes>
            <Route path='/' element={<Scrape/>}></Route>
            <Route path='/generate' element={<Generate/>}></Route>
            <Route path='/both' element={<Both/>}></Route>
          </Routes>
      </div>
    )
  }
}

export default App;
