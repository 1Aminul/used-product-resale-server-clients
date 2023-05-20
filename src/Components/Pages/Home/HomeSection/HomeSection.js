import React from 'react';



const HomeSection = () => {
  return (
    <div className='lg:flex lg:gap-5 w-full lg:h-[650px] my-20 lg:overflow-hidden  px-5'>
      <div className='lg:w-1/3 sm:h-96 md:h-96 lg:h-full border border-red-100 bg-no-repeat' style={{ backgroundImage: `url(https://images.pexels.com/photos/16650520/pexels-photo-16650520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`, backgroundSize: 'cover', backgroundPosition: "center" }}>
        <div className='bg-gradient-to-r from-neutral w-full h-full flex flex-col'>
          <h1 className='text-white text-4xl font-bold flex justify-center items-center py-16'>This is the amazing Car</h1>
          <button className='btn btn-error w-32 mx-auto'>Shop Now</button>
        </div>
      </div>
      <div className=' flex flex-col gap-3'>
        <div className='flex justify-between items-center  gap-5'>
          <div className='w-80 h-64'>
            <img className='w-full h-full' src='https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
          </div>
          <div className='w-80 h-64'>
            <img className=' w-full h-full' src='https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
          </div>
        </div>
        <div>
          <img className=' w-full h-96' src='https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
         
        </div>
      </div>
      <div className='lg:w-1/3 sm:h-96 md:h-96 lg:h-full border border-red-100 bg-no-repeat' style={{ backgroundImage: `url(https://img.freepik.com/free-photo/gold-supercar-with-word-supercar-front_1340-32300.jpg?size=626&ext=jpg&ga=GA1.1.70084862.1674650474&semt=sph)`, backgroundSize: 'cover', backgroundPosition: "center" }}>
        <div className='bg-gradient-to-r from-neutral w-full h-full flex flex-col'>
          <h1 className='text-white text-4xl font-bold flex justify-center items-center py-16'>This is the amazing Car</h1>
          <button className='btn btn-error w-32 mx-auto'>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;