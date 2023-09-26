import React, { useState } from 'react';
import axios from 'axios'; // You'll need Axios for making POST requests
import { Bar } from 'react-chartjs-2';
import DashNav from '../components/DashNav';

export const Scrape = () => {

    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState('');

    const dataBody = {"search_obj": inputValue}
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    
    const handleButtonClick = async(e) => {
        axios.post('http://localhost:5002/keywords', dataBody)
        .then(thisresponse => {
            //add content
            setData(thisresponse);
        })
        .catch(error => {
            console.error(error.response.data);
        });
    };

    return(
        <>
            <DashNav />
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