import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';
const AdvertiseItem = () => {
    const { user } = useContext(AuthContext)
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products`)
            const data = await res.json()
            return data;
        }
    })
    const { data: advertiseitem = [] } = useQuery({
        queryKey: ['advertiseitem'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertiseitem`)
            const data = await res.json()
            return data;
        }
    })


    const handlerBooked = (advertise) => {
        console.log(advertise);

        const booking = {
            name: user?.displayName,
            email: user?.email,
            itemName: advertise.productName,
            price: advertise.price,
            phone: advertise.phone,
            location: advertise.location,
            image: advertise.image
        }
        console.log(booking);

        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Your order is record")
                }
            })
    }

    return (
        <div className='my-20'>
            {
                products.length > 0 &&
                <>
                    <h2 className="text-3xl font-bold mb-5 text-center">Advertise Item</h2>
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-36'>
                        {
                            advertiseitem.map(advertise =>
                                <div className="card w-96 bg-base-100 shadow-2xl border-spacing-2 border-primary ">
                                    <figure><img src={advertise.image} className='w-full' alt="" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{advertise.productName}</h2>
                                        <p className='text-success font-bold'>TK {advertise.price}</p>
                                        <hr />
                                        <div>
                                            <p className='text-neutral'>Conditon: {advertise.condition}</p>
                                            <p className='text-neutral'>Phone: {advertise.phone}</p>
                                            <p className='text-neutral'>Year of Purchase: {advertise.year}</p>
                                            <p className='text-neutral'>Description: {advertise.description}</p>
                                        </div>
                                        <div>
                                            <button onClick={() => handlerBooked(advertise)} className="btn btn-primary text-base-100 w-full">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </>
            }
        </div>
    );
};

export default AdvertiseItem;