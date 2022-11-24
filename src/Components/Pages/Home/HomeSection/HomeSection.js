import React from 'react';
import car1 from '../../../../images/car1.webp'
const HomeSection = () => {
    return (
        <div className="hero bg-base-100 my-20">
        <div className="hero-content flex-col lg:flex-row">
          <img src={car1} className=" w-2/4 rounded-lg shadow-2xl" alt='' />
          <div>
            <h1 className="text-5xl font-bold">Luxery Model Car</h1>
            <p className="py-6 text-xl">Here you can buy any use car,here are so many brand car that you can buy.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default HomeSection;