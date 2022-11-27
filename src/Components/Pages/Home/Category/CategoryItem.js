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
                        <div key={category.id} className="card w-3/4 bg-neutral shadow-xl">
                            <figure><img src={category.image1} className='w-full' alt="" /></figure>
                            <div className="card-body">
                                <div className='flex justify-between mb-3'>
                                    <h2 className="card-title text-accent">{category.name}</h2>
                                    <h2 className="text-xl font-bold text-warning">$ {category.description.resaleprice}</h2>
                                </div>
                                <div className='flex items-center justify-evenly'>
                                    <div>
                                        <p className="text-success">Brand: {category.description.Brand}</p>
                                        <p className="text-success">Model: {category.description.Model}</p>
                                        <p className="text-success">Condition: {category.description.Condition}</p>
                                    </div>
                                    <div>
                                       
                                        <p className="text-success">Year of use: {category.description.used}</p>
                                        <p className="text-error">Original Price: {category.description.price}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="card-actions justify-between mb-3">
                                    <div>
                                        <p className="text-success">Posted Date: {category.date}</p>
                                        <p className="text-success">Location: {category.location}</p>
                                    </div>
                                </div>
                                <label htmlFor="used-product-modal" onClick={() => setBooking(category.id)} className="btn btn-warning text-neutral w-full">Book Now</label>
                            </div>
                            {
                                booking && <BookingModal
                                    booking={booking}
                                    items={item}
                                    setBooking={setBooking}
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