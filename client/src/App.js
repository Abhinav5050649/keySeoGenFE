import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from './pages/home';
import {Login} from './pages/login';
import {Signup} from './pages/signup';
import {Scrape} from './pages/scrape';
import {Generate} from './pages/generate';
import Navbar from './components/Navbar';
import DashNav from './components/DashNav';
function App() {
    if (!localStorage.getItem('isLoggedIn')){
        return (
            <>
            <Router>
                    <div className="App">
                        <Navbar/>
                        <Routes>
                        <Route exact path='/' element={<Home/>}></Route>
                        <Route exact path='/login' element={<Login/>}></Route>
                        <Route exact path='/signup' element={<Signup/>}></Route>
                        </Routes>
                    </div>
            </Router>
            </>
        );
    }else{
        return (
            <>
            <Router>
                <div className='App'>
                    <DashNav/>
                    <Routes>
                    <Route exact path='/scrape' element={<Scrape/>}></Route>
                    <Route exact path='/generate' element={<Generate/>}></Route>
                    </Routes>
                </div>
            </Router>
            </>
        );
    }
}

export default App;
