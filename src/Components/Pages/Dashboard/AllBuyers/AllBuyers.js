import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import useAdmin from '../../../hooks/useAdmin';
import { AuthContext } from '../../../Context/AuthProvider';

const AllBuyers = () => {
    const [buyerDelete, setBuyerDelete] = useState(null)
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`);
            const data = await res.json()
            return data
        }
    })
    const usersinfo = users.filter(user => user?.option !== 'Seller')


    const handlerDeleteBuyer = id => {
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                }
            })
    }


    return (
        <div className="overflow-x-auto ml-4">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Option</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersinfo.map((userinfo, i) =>
                             <tr key={userinfo._id} className="hover">
                                <th>{i+1}</th>
                                <td>{userinfo.name}</td>
                                <td>{userinfo.email}</td>
                                <td>{userinfo.option}</td>
                                <td>
                                    {
                                        user && isAdmin && <> <label onClick={()=> setBuyerDelete(userinfo)} htmlFor="delete-modal" className="btn btn-error text-base-100">Delete</label></>
                                    }
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {
                buyerDelete &&
                    <div>
                        <input type="checkbox" id="delete-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <h3 className="font-extrabold text-lg">Are you sure to delete {buyerDelete.name}?</h3>
                                <p className="py-4"></p>
                                <div className="modal-action">
                                    <label htmlFor="delete-modal" onClick={()=> handlerDeleteBuyer(buyerDelete._id)} className='btn btn-error text-base-100'>Delete</label>
                                    <label htmlFor="delete-modal" className="btn btn-outline">Cancel</label>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default AllBuyers;