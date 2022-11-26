import React from 'react';
import { useQuery } from '@tanstack/react-query'



const AllSallers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`);
            const data = await res.json()
            return data
        }
    })

    const usersinfo = users.filter(user=> user.option === 'Seller')
    
    
    return (
        <div className="overflow-x-auto ml-4">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Option</th>
                        <th>Verification</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersinfo.map((userinfo, i)=>
                        <tr className="hover">
                            <th>{i+1}</th>
                            <td>{userinfo.name}</td>
                            <td>{userinfo.email}</td>
                            <td>{userinfo.option}</td>
                            <td>
                                {
                                    userinfo?.verification ? <button className='btn btn-success'>Verified</button> : <button className='btn btn-success'>Unverified</button>
                                }
                            </td>
                        </tr>  
                            )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSallers;