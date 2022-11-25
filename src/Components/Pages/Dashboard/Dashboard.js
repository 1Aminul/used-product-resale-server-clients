import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Outlet, Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                   
                   <Outlet></Outlet>

                </div>
                <div className="drawer-side border">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/allsallers'>All Sallers</Link></li>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;