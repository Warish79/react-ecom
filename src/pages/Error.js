import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className='large-box mx-auto align-items-center text-muted justify-content-center mt-50'>
            <div className='notfound-404'>
                <h1 className='text-center display-1 text-muted'>404!</h1>
            </div>
            <div className='text-center mt-5'>
                <h2>We are Sorry, page Not found! </h2>
            
            <div className='mt-4'>
                <p>
                    The page are you looking for might have Been removed had its name changed
                         or its temporary unavailable.
                </p>
            </div>
            <Link to="/"> Back to Dasboard</Link>
            </div>
        </div>
    )
}

export default Error404;
