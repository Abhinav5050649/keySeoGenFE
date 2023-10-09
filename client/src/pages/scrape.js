import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import DashNav from '../components/DashNav';
import { useNavigate } from 'react-router-dom';

export const Scrape = () => {

    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState('');

    const dataBody = {"search_obj": inputValue}

    let navigate = useNavigate();
    //if (!localStorage.getItem('isTokenPresent'))    navigate("/")

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = async(e) => {
        axios.post('http://localhost:5000/api/search/keywords', dataBody)
        .then(thisresponse => {
            setData(thisresponse);
        })
        .catch(error => {
            console.error(error.response.data);
        });
    };

    return(
            <div className='box1'>
                <div className='box11'>
                    <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter keyword to check: "
                    />
                    <button onClick={handleButtonClick}>Scrape</button>
                </div>
                
                <div className='box12'>
                    {response && (
                    <Bar
                        data={response}
                        options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        }}
                    />
                    )}
                </div>
            </div>
    )
}

export default Scrape;