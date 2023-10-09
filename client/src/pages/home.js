import React from 'react';
import Navbar from '../components/Navbar';

export const Home = () => {
    return (
        <div className="container">
            <h1 style={{marginTop: '15%', marginBottom: '1%', textAlign: 'center', fontFamily: 'serif', fontSize: '5rem', color: '#004225'}}><strong>primeGen</strong></h1>
            <blockquote style={{fontSize: '2rem', color: '#004225'}}>All your SEO Needs, at one place!</blockquote>
        </div>
    );
}

export default Home;