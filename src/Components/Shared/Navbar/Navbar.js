import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg'
import { AuthContext } from '../../Context/AuthProvider';
import {FaUser} from 'react-icons/fa'

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const handleLogout = () => {
        LogOut()
    }
    const menu = <>
        <li className= 'text-xl font-bold lg:text-base-100'><Link to='/'>Home</Link></li>
        <li className= 'text-xl font-bold lg:text-base-100'><Link to='/blog'>Blog</Link></li>

        {
            user?.email ? <>
                <li className = 'text-xl font-bold lg:text-base-100'><Link to='/dashboard'>Dashborad</Link></li>
                <li className = 'text-xl font-bold lg:text-base-100'><Link to='/login'><button onClick={handleLogout}>SignOut</button></Link></li>
                <li className='lg:text-base-100 text-xl' title={user?.email}><Link to='/login'><button><FaUser></FaUser></button></Link></li>
            </>
                : <li  className = 'text-xl  font-bold lg:text-base-100'><Link to='/login'>Login</Link></li>
        }

    </>
    return (
        <div className="navbar bg-secondary mt-1 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={1} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={2} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <span className='text-4xl lg:text-base-100 font-extrabold'>Used</span>
                    <img src={logo} alt="this is logo" className='w-32' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" className="btn btn-ghost ml-20 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;