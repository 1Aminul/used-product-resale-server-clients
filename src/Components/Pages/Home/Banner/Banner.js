import React from 'react';
import usedCar from '../../../../images/used-car.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen " style={{ backgroundImage: `url(${usedCar})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-base-100">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Used Car Sale Market</h1>
            <p className="mb-5">If you buy second-hand car, please visit our website</p>
           
          </div>
        </div>
      </div>
    );
};

export default Banner;