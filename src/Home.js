import React from 'react';
import { Link } from 'react-router-dom';
import HomeValidation from './HomeValidation';

function Home() {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='bg-white p-3 rounded w-50 text-center'>
                <h2>Welcome to Home Page</h2>
                <p>You have successfully logged in or signed up.</p>
                <Link to="/profile" className='btn btn-primary w-50 rounded-0'>Go to Profile</Link><br/>
                <Link to="/logout" className='btn btn-danger w-50 rounded-0 mt-2'>Logout</Link>
            </div>
        </div>
    );
}

export default Home;
