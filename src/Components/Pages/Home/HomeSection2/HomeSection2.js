import React from 'react';
import { FaCar, FaCheck } from 'react-icons/fa';
import homeCar from '../../../../images/homesection.png'
import homeCar2 from '../../../../images/home2.PNG'

const HomeSection2 = () => {
    return (
        <div className='lg:flex px-16 my-32'>
            <div className='lg:w-2/3 relative'>
                <div>
                    <img src={homeCar} alt='' />
                </div>
                <img className='absolute top-0 left-0 rounded-lg' src={homeCar2} alt=''/>
            </div>
            <div className='lg:w-2/3'>
                <h4 className='text-red-500 text-lg font-bold tracking-[6px]'><FaCar className='text-red-500 inline mr-3 text-2xl' />ABOUT US</h4>
                <h1 className='text-5xl font-extrabold text-black-500 mt-3'>World Largest <span className='text-red-500'>Car <br /> Dealer</span> Marketplace.</h1>
                <p className='text-2xl text-gray-500 text-justify mt-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                <ul className='mt-4'>
                    <li className='text-lg font-bold text-gray-500'><FaCheck className='w-6 h-6 rounded-full text-red-500 inline mr-2 border-2 border-error p-1'/> At vero eos et accusamus et iusto odio.</li>
                    <li className='text-lg font-bold text-gray-500'><FaCheck className='w-6 h-6 rounded-full text-red-500 inline mr-2 border-2 border-error p-1 mt-2'/> Established fact that a reader will be distracted.</li>
                    <li className='text-lg font-bold text-gray-500'><FaCheck className='w-6 h-6 rounded-full text-red-500 inline mr-2 border-2 border-error p-1 mt-2'/> Established fact that a At vero eos et accusamus</li>
                </ul>
                <button className='btn btn-error mt-4'>Discover More</button>
            </div>

        </div>
    );
};

export default HomeSection2;