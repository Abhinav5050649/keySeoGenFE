import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import Navbar from '../components/Navbar';

export const Scrape = () => {

    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState('');

    const dataBody = {"search_obj": inputValue}
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    
    const handleButtonClick = async(e) => {
        axios.post('http://localhost:5002/api/search/keywords', dataBody)
        .then(thisresponse => {
            setData(thisresponse);
        })
        .catch(error => {
            console.error(error.response.data);
        });
    };

    return(
        <>
            <Navbar />
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
        </>
    )
}

export default Scrape;