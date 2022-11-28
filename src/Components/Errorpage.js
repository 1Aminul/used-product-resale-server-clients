import React from 'react';
import error from '../images/error.webp'
const Errorpage = () => {
    return (
        <div>
            <img src={error} className= "w-4/5" alt="" />
            <h2 className='text-5xl text-error text-center'>Page Not Found</h2>
        </div>
    );
};

export default Errorpage;