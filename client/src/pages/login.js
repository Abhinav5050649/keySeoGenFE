import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export const Login = () => {
    let navigate = useNavigate();

    const [temail, setTemail] = useState("");
    const [tpassword, setTpassword] = useState("");

    //let jVal = null;
    // const handleLogin = async(e) => {
    //     e.preventDefault();
    //     console.log(temail + " "+ " " +tpassword);
    //     //const data = ({"email": temail , "password": tpassword});
    //     console.log("Hello I am under the water!")
    //     axios({
    //         url: `http://localhost:5000/api/auth/login`,
    //         headers: { 'Content-Type': 'application/json' },
    //         method: 'POST',
    //         body: {
    //             "email": temail,
    //             "password": tpassword
    //         }
    //     })
    //     .then(async function(response) {
    //         console.log(response.data)
    //         // return res.status(200).send(response.data)
    //         jVal = await response.json()
    //     })
    //     .catch(function(error) {
    //         console.log('error')
    //         console.log('error in login')
    //     })

    //     if (jVal != null)
    //     {
    //         localStorage.setItem('isLoggedIn', true)
    //         console.log('Login successful');
    //         navigate("/scrape");
    //     }
    //     else{
    //         navigate("/");
    //     }
    // }

    const handleLogin = async(e) => {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                "email":temail,
                "password":tpassword
            })

            console.log(response);

            if (response != null){
                localStorage.setItem('isLoggedIn', true)
                alert(`You have successfully logged in!`)
                navigate("/scrape");
            }else{
                navigate("/");
            }
        } catch (error) {
            console.error(error);
        }
    }
    
    return(
            <div className="container mt-5">
                <div className="row justify-content-center" style={{marginTop: '15%', marginInline: '5%'}}>
                    <div className="col-md-6">
                        <div className="card" style={{backgroundColor: '#F5F5DC', border: 'solid', borderColor: '#004225', width: '85%'}}>
                            <div className="card-header" style={{color: '#004225'}}>
                                <h3>Login</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleLogin}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label" style={{color: '#004225'}}><strong>Email</strong></label>
                                        <input type="email" className="form-control" value={temail} onChange={(e) => setTemail(e.target.value)} id="email" placeholder="Enter your email" required={true}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label" style={{color: '#004225'}}><strong>Password</strong></label>
                                        <input type="password" className="form-control" value={tpassword} onChange={(e) => setTpassword(e.target.value)} id="password" placeholder="Enter your password" required={true}/>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn" style={{color: '#004225', border: 'solid', borderColor: '#004225'}}><strong>Login</strong></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login;