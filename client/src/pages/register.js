import React from 'react';
import Navbar from '../components/Navbar';

export const Register = () => {
    return(
        <>
            <Navbar/>
            <div className='form-container' style={{marginTop: '15%', marginLeft: '40%', textAlign: 'center', width:'20%', border: 'solid', borderRadius: '10%'}}>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Register;