import React, {useContext} from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../../Context/AuthProvider';

const MyBookings = () => {
    const {user} = useContext(AuthContext)
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    return (
        
           
            <div className="overflow-x-auto w-full ml-4">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                               SL
                            </th>
                            <th>Name</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((book, i)=>
                            <tr>
                            <th>
                                {i+1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16 h-16">
                                            <img src={book.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{book.name}</div>
                                        <div className="text-sm opacity-50">{book.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                               {book.itemName}
                                
                            </td>
                            <td>Price</td>
                            <th>
                                <button className="btn btn-primary">Pay</button>
                            </th>
                        </tr>
                            )
                        }
                      
                    </tbody>
                </table>
            </div>
       
    );
};

export default MyBookings;