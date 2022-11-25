import React from 'react';
import { useQuery } from '@tanstack/react-query'

const MyBookings = () => {
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/bookings');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className="overflow-x-auto ml-12">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Item</th>
                        <th>Phone</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((book,i) =>
                        <tr className="hover">
                            <th>{i+1}</th>
                            <td>{book.name}</td>
                            <td>{book.itemName}</td>
                            <td>{book.phone}</td>
                            <td>{book.location}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyBookings;