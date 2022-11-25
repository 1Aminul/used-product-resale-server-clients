import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import BookingModal from '../../../Shared/BookingModal/BookingModal';
const CategoryItem = () => {
    const [booking, setBooking] = useState()
    const data = useLoaderData()
    const { item } = data
    return (
        <div className='w-4/5 mx-auto'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-3 my-20'>
                {
                    item.map(category =>
                        <div key={category.id} className="card w-3/4 bg-base-100 shadow-xl">
                            <figure><img src={category.image1} className='w-full' alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{category.name}</h2>
                                <h2 className="text-xl font-bold text-success">TK {category.description.resaleprice}</h2>
                                <div className='flex items-center justify-evenly'>
                                    <div>
                                        <p>Brand: {category.description.Brand}</p>
                                        <p>Condition: {category.description.Condition}</p>
                                    </div>
                                    <div>
                                        <p>Model: {category.description.Model}</p>
                                        <p>Year of use: {category.description.used}</p>
                                        <p className="text-error">Original Price: {category.description.price}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="card-actions justify-between">
                                    <div>
                                        <p>Posted Date: {category.date}</p>
                                        <p>Location: {category.location}</p>
                                    </div>
                                    <label htmlFor="used-product-modal" onClick={()=>setBooking(category.id)} className="btn btn-primary text-base-100">Book Now</label>
                                </div>
                            </div>
                            {
                                booking && <BookingModal
                                booking = {booking} 
                                items= {item}
                                setBooking = {setBooking}
                                ></BookingModal>
                            }
                        </div>
                        
                    )
                }
            </div>
            
        </div>
    );
};

export default CategoryItem;