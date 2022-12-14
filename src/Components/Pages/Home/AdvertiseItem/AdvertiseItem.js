import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdvertiseItem = () => {
    const { user } = useContext(AuthContext)
    const [users, setUsers] = useState(null)
    useEffect(()=>{
        axios.get(`https://used-products-resale-server-1aminul.vercel.app/users`)
        .then(res=>{
            setUsers(res.data)
        })
    },[])

    console.log(users);

    const { data: advertiseitem = [] } = useQuery({
        queryKey: ['advertiseitem'],
        queryFn: async () => {
            const res = await fetch(`https://used-products-resale-server-1aminul.vercel.app/advertiseitem`)
            const data = await res.json()
            return data;
        }
    })
    // const { data: users = [] } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch(`https://used-products-resale-server-1aminul.vercel.app/users`)
    //         const data = await res.json()
    //         return data;
    //     }
    // })
        if(!users){
            return null
        }
        const userOption = users.find(userinfo=> userinfo?.email === user?.email )
        console.log(userOption);

   
    const handlerBooked = (advertise) => {

        const booking = {
            name: user?.displayName,
            email: user?.email,
            itemName: advertise.productName,
            price: advertise.price,
            phone: advertise.phone,
            location: advertise.location,
            image: advertise.image,
            id: advertise._id
        }

        fetch("https://used-products-resale-server-1aminul.vercel.app/bookings", {
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
                advertiseitem.length > 0 &&
                <>
                    <h2 className="text-3xl font-bold mb-5 text-center">Advertise Item</h2>
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            advertiseitem.map(advertise =>
                                <div className="card w-96 bg-neutral shadow-2xl ">
                                    <figure><img src={advertise.image} className='w-full' alt="" /></figure>
                                    <div className="card-body">
                                        <div className='flex justify-between'>
                                            <h2 className="card-title text-accent">{advertise.productName}</h2>
                                            <h2 className='text-warning font-bold'>$ {advertise.price}</h2>
                                        </div>
                                        <hr />
                                        <div>
                                            <p className='text-success'>Conditon: {advertise.condition}</p>
                                            <p className='text-success'>Phone: {advertise.phone}</p>
                                            <p className='text-success'>Year of Purchase: {advertise.year}</p>
                                            <div className='flex items-center'> 
                                                <h2 className='text-warning'>
                                                    {advertise?.name} 
                                                </h2>
                                               {
                                                    advertise?.verification === 'verified'  &&  <FaCheckCircle className='ml-5 text-xl text-success'></FaCheckCircle>
                                               }

                                            </div>
                                            <p className='text-success'>Posted Date: {advertise?.time}</p>
                                        </div>
                                        <div>
                                            {
                                                userOption?.option === 'Seller' || userOption?.option === 'Admin' ?
                                                <button className='btn btn-warning text-neutral w-full'>You are not buyer</button>:
                                                <Link to = '/dashboard'><button onClick={() => handlerBooked(advertise)} className="btn btn-warning text-neutral w-full">Book Now</button></Link> 
                                               
                                            }
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