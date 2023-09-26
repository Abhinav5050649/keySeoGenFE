import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import Scrape from './pages/scrape';
import Generate from './pages/generate';
import Both from './pages/both';

function App() {
  if (!sessionStorage.getItem('isTokenPresent')){
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }else{
    return(
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/scrape' element={<Scrape/>}></Route>
            <Route path='/generate' element={<Generate/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
