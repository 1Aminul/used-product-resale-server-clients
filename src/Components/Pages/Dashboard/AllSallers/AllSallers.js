import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import useAdmin from '../../../hooks/useAdmin';
import { AuthContext } from '../../../Context/AuthProvider';
import {FaCheckCircle} from 'react-icons/fa'
import { useTitle } from '../../../hooks/useTitle';


const AllSallers = () => {
    useTitle("All Sallers")
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [sallerDelete, setSallerDelete] = useState(null)
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://used-products-resale-server-1aminul.vercel.app/users`);
            const data = await res.json()
            return data
        }
    })

    const usersinfo = users.filter(user => user.option === 'Seller')


    const handlerDeleteSaller = id => {
        console.log(id);
        fetch(`https://used-products-resale-server-1aminul.vercel.app/users/${id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    refetch()
                }
            })
    }

    const handlerVerifySaller = id => {
        fetch(`https://used-products-resale-server-1aminul.vercel.app/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },    
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    refetch()
                }
            })
    }

    return (
        <div className="overflow-x-auto ml-4">
            <h2 className="text-2xl font-bold mb-3">All Sallers:</h2>
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Option</th>
                        <th>Verification</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersinfo.map((userinfo, i) =>
                            <tr key={userinfo._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{userinfo.name}</td>
                                <td>{userinfo.email}</td>
                                <td>{userinfo.option}</td>
                                <td>
                                    {
                                        user && isAdmin &&
                                        <>
                                            {
                                                userinfo?.verification === "verified" ? <p><FaCheckCircle className='text-success text-3xl'/></p> : <button onClick={()=>handlerVerifySaller(userinfo._id) } className='btn btn-success text-base-100'>Verify</button>
                                            }
                                        </>
                                    }
                                </td>
                                <td>
                                    {
                                        user && isAdmin && <label onClick={() => setSallerDelete(userinfo)} htmlFor='delete-modal' className='btn btn-error text-base-100'>Delete</label>
                                    }
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {
                sallerDelete &&
                <div>
                    <input type="checkbox" id="delete-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-extrabold text-lg">Are you sure to delete {sallerDelete.name}?</h3>

                            <div className="modal-action">
                                <label htmlFor="delete-modal" onClick={() => handlerDeleteSaller(sallerDelete._id)} className='btn btn-error text-base-100'>Delete</label>
                                <label htmlFor="delete-modal" className="btn btn-outline">Cancel</label>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default AllSallers;