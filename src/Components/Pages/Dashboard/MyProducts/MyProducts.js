import React, {useContext, useState} from 'react';
import { useQuery } from '@tanstack/react-query'
import {toast} from 'react-hot-toast'
import { AuthContext } from '../../../Context/AuthProvider';
import { useTitle } from '../../../hooks/useTitle';


const MyProducts = () => {
    useTitle("My products")
    const {user} = useContext(AuthContext)
    const [productDelete, setProductDelete] = useState(null)
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://used-products-resale-server-1aminul.vercel.app/products`)
            const data = await res.json()
            return data;
        }
    })


    const handlerDeleteProduct = id => {
        
        fetch(`https://used-products-resale-server-1aminul.vercel.app/products/${id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                }
            })
    }

    const now = new Date();
    const date = now.getDate()
    
    const nameOfMonthUS = new Intl.DateTimeFormat('en-US', {month: 'short'}).format(
        new Date(),
      );
      
    let time = `${date} ${nameOfMonthUS}`

    console.log(time);

    const handlerAdvertise = product =>{

        const  advertiseItem = {
                productName: product.productName,
                price: product.price,
                name: product.name,
                email: product.email,
                verification: product.verification,
                year: product.year,
                location: product.location,
                phone: product.phone,
                condition: product.condition,
                image: product.image,
                time
        }

        fetch(`https://used-products-resale-server-1aminul.vercel.app/advertiseitem`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertiseItem)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                   
                    fetch(`https://used-products-resale-server-1aminul.vercel.app/products/${product._id}`,{
                        method: "PUT",
                        headers: {
                            "content-type": "application/json"
                        }
                    }).then(res=> res.json())
                    .then(data=> {
                        refetch()
                        toast.success('please check your advertise item')
                        console.log(data);
                    })
                }
            })
    }
    return (
        <div className=' ml-4'>
            <h2 className='text-2xl mb-5'>My Products:</h2>
            <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Price</th>
                        <th>Advertise</th>
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
                            <td>{product.email}</td>
                            <td>{product.phone}</td>
                            <td>{product.price}</td>
                            <td>
                                {
                                    product.advertise === 'advertised' ? 
                                    <button className='btn' disabled>Advertise</button>
                                    :
                                   <>
                                    {
                                      user?.email === product.email ?
                                      <button onClick={()=>handlerAdvertise(product)} className='btn btn-info text-base-100'>Advertise</button>
                                      :
                                      <button className='btn text-base-100'>Not Advertise</button>
                                    }
                                   </>
                                   
                                }
                            </td>
                            <td>
                               {
                                    user?.email === product.email ?
                                    <label htmlFor='delete-modal' onClick={()=> setProductDelete(product)} className='btn btn-error text-white'>Delete</label>
                                    :
                                    <button className='btn text-base-100'>Not Delete</button>
                               }
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>

            {
                productDelete &&
                    <div>
                        <input type="checkbox" id="delete-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <h3 className="font-extrabold text-lg">Are you sure to delete {productDelete.productName}?</h3>
                                <p className="py-4"></p>
                                <div className="modal-action">
                                    <label htmlFor="delete-modal" onClick={()=> handlerDeleteProduct(productDelete._id)} className='btn btn-error text-base-100'>Delete</label>
                                    <label htmlFor="delete-modal" className="btn btn-outline">Cancel</label>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
        </div>
    );
};

export default MyProducts;