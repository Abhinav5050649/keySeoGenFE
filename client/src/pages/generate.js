import React from 'react';
import DashNav from '../components/DashNav';
import { useNavigate } from 'react-router-dom';

export const Generate = () => {
    let navigate = useNavigate();

    //if (!localStorage.getItem('isTokenPresent'))    navigate("/")
    
    return(
            <div>
                <p>hello</p>
            </div>
    )
}

export default Generate;