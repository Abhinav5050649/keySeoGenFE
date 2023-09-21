import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute';
import Home from './pages/home';
import Register from './pages/register';
import Scrape from './pages/scrape';
import Generate from './pages/generate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <ProtectedRoute path='/scrape' element={<Scrape/>}></ProtectedRoute>
          <ProtectedRoute path='/generate' element={<Generate/>}></ProtectedRoute>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
