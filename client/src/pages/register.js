import React from 'react';
import Navbar from '../components/Navbar';

export const Register = () => {
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
                                        <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label" style={{color: '#004225'}}><strong>Password</strong></label>
                                        <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn" style={{color: '#004225', border: 'solid', borderColor: '#004225'}}><strong>Login</strong></button>
                                        <button type="submit" className="btn" style={{color: '#004225', border: 'solid', borderColor: '#004225'}}><strong>Signup</strong></button>
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