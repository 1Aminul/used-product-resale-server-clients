import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Outlet, Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSaller from '../../hooks/useSaller';

const Dashboard = () => {

    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSaller] = useSaller(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer bg-base-100 drawer-mobile my-8">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ml-4">
                   
                   <Outlet></Outlet>

                </div>
                <div className="drawer-side border border-spacing-5">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        
                        <li className='text-xl font-bold'><Link to='/dashboard'>My Orders</Link></li>
                        {
                            user && isAdmin && <> <li className='text-xl font-bold'><Link to='/dashboard/allsallers'>All Sallers</Link></li>
                            <li className='text-xl font-bold'><Link to='/dashboard/allbuyers'>All Buyers</Link></li></>
                        }
                       {
                            user && isSaller && <> <li className='text-xl font-bold'><Link to='/dashboard/addproducts'>Add Products</Link></li>
                            <li className='text-xl font-bold'><Link to='/dashboard/myproducts'>My Products</Link></li></>
                       }
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;