import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
//import { useHistory } from 'react-router-dom';

export const Register = () => {
    let navigate = useNavigate();
    //let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerData = {
        email: email,
        password: password,
    };

    const handleLogin = async(e) => {
        axios.post('http://localhost:5002/api/auth/login', registerData)
        .then(response => {
            e.preventDefault();
            console.log('Login successful');
            if (response.data.message){
                sessionStorage.setItem('isTokenPresent', true);
                response.redirect("/scrape");
            }
        })
        .catch(error => {
            console.error('Login failed');
            console.error(error.response.data);
        });
    }

    const handleSignup = async(e) => {
        axios.post('http://localhost:5002/api/auth/signup', registerData)
        .then(response => {
            e.preventDefault();
            console.log('Signup successful');
            //console.log(response.data); 
            if (response.data.message){
                sessionStorage.setItem('isTokenPresent', true);
                response.redirect("/scrape");
            }
        })
        .catch(error => {
            console.error('Signup failed');
            console.error(error.response.data);
        });
    }

    return(
        <>
            <Navbar/>
            <div className="container mt-5">
                <div className="row justify-content-center" style={{marginTop: '15%', marginInline: '5%'}}>
                    <div className="col-md-6">
                        <div className="card" style={{backgroundColor: '#F5F5DC', border: 'solid', borderColor: '#004225', width: '85%'}}>
                            <div className="card-header" style={{color: '#004225'}}>
                                <h3>Login/Signup</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label" style={{color: '#004225'}}><strong>Email</strong></label>
                                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter your email" required={true}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label" style={{color: '#004225'}}><strong>Password</strong></label>
                                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Enter your password" required={true}/>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn" onClick={handleLogin} style={{color: '#004225', border: 'solid', borderColor: '#004225'}}><strong>Login</strong></button>
                                        <button type="submit" className="btn" onClick={handleSignup} style={{color: '#004225', border: 'solid', borderColor: '#004225'}}><strong>Signup</strong></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;