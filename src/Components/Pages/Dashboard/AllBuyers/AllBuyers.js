import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import useAdmin from '../../../hooks/useAdmin';
import { AuthContext } from '../../../Context/AuthProvider';

import ConfirmModal from '../../../Shared/ConfermModal/ConfirmModal';
const AllBuyers = () => {
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
    const usersinfo = users.filter(user => user.option === 'Buyer')


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
                                <th>{i + 1}</th>
                                <td>{userinfo.name}</td>
                                <td>{userinfo.email}</td>
                                <td>{userinfo.option}</td>
                                <td>
                                    {
                                        user && isAdmin && <> <label htmlFor="delete-modal" className="btn btn-error text-base-100">Delete</label></>
                                    }
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <ConfirmModal
                handlerDeleteBuyer={handlerDeleteBuyer}
                usersinfo = {usersinfo}
            ></ConfirmModal>
        </div>
    );
};

export default AllBuyers;