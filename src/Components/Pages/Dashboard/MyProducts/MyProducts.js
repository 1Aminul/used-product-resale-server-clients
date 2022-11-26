import React from 'react';
import { useQuery } from '@tanstack/react-query'


const MyProducts = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products`)
            const data = await res.json()
            return data;
        }
    })
    return (
        <div className="overflow-x-auto ml-4">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Mobile No</th>
                        <th>Price</th>
                        
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, i) =>
                        <tr key={product._id} className="hover">
                            <th>{i+1}</th>
                            <td>{product.productName}</td>
                            <td>{product.location}</td>
                            <td>{product.phone}</td>
                            <td>{product.price}</td>
    
                            <td><button className='btn btn-error text-white'>Delete</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;