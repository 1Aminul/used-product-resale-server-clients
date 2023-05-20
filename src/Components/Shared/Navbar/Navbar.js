import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import { AuthContext } from '../../Context/AuthProvider';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaRegEnvelope, FaSignOutAlt, FaTwitter, FaUser } from 'react-icons/fa'
import { IoIosLogIn, IoMdStopwatch } from 'react-icons/io'
import './Navbar.css'

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const handleLogout = () => {
        LogOut()
    }
    const menu = <>
        <li className='text-xl font-bold lg:text-dark-100'><Link to='/'>Home</Link></li>
        <li className='text-xl font-bold lg:text-dark-100'><Link to='/about'>About</Link></li>
        <li className='text-xl font-bold lg:text-dark-100'><Link to='/blog'>Blog</Link></li>
        <li className='text-xl font-bold lg:text-dark-100'><Link to='/contact'>Contact</Link></li>
        

        {
            user?.email ? <>
                <li className='text-xl font-bold lg:text-dark-100'><Link to='/dashboard'>Dashborad</Link></li>
                <li className='text-xl font-bold lg:text-dark-100 lg:hidden'><Link to='/login'><button onClick={handleLogout}>SignOut</button></Link></li>
                <li className='lg:text-dark-100 text-xl' title={user?.email}><button><FaUser></FaUser></button></li>
            </>
                : <li className='text-xl  font-bold lg:text-dark-100 lg:hidden'><Link to='/login'>Login</Link></li>
        }

    </>
    const account = <>
        {
            user?.email ? <>
                <div className='text-xl font-bold lg:text-base-100 mr-6 flex items-center gap-1'>
                    <FaSignOutAlt className='text-red-500'/>
                    <Link to='/login'><button onClick={handleLogout}>SignOut</button></Link>
                </div>
            </>
                :
                <div className='flex justify-between'>
                    <div className='text-xl mr-10  font-bold lg:text-base-100 flex items-center'>
                        <IoIosLogIn className='text-red-500 text-md' />
                        <Link to='/login'>Login</Link>
                    </div>
                    <div className='text-xl mr-6  font-bold lg:text-base-100 flex items-center'>
                        <FaUser className='text-red-500 text-md' />
                        <Link to='/signup'>Register</Link>
                    </div>
                </div>
        }
    </>
    return (
        <div>
            <div className='bg-neutral w-full h-12 relative px-48 pt-3 sm:hidden md:hidden lg:block'>
                <div className='absolute bg-red-600 top-0 left-0 z-10 w-48 h-12 clip'></div>
                <div className='flex justify-between'>
                    <div className='flex justify-between gap-5'>
                        <div className='flex items-center'>
                            <FaRegEnvelope className='text-red-500 text-md' />
                            <p className='text-white font-bold text-md ml-2'>info@gmail.com</p>
                        </div>
                        <div className='flex items-center'>
                            <FaPhoneAlt className='text-red-500 text-md' />
                            <p className='text-white font-bold text-md ml-2'>+1 0255425456</p>
                        </div>
                        <div className='flex items-center'>
                            <IoMdStopwatch className='text-red-500 text-md' />
                            <p className='text-white font-bold text-md ml-2'>Sun - Fri (08AM - 10PM)</p>
                        </div>

                    </div>
                    <div className='flex justify-between'>
                        <p className='text-white text-bold text-md ml-2'>{account}</p>
                        <div className='text-white'>
                            <span className='text-xl font-bold'>Follow us: </span>
                            <span><FaFacebook className='inline text-xl'/></span>
                            <span><FaTwitter className='inline text-xl ml-2'/></span>
                            <span><FaInstagram className='inline text-xl ml-2'/></span>
                           
                        </div>
                    </div>

                </div>
                <div className='absolute bg-red-600 top-0 right-0 z-10 w-48 h-12 clip-2'></div>
            </div>
            <div className="navbar bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={1} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={2} className="menu menu-compact dropdown-content mt-4 p-5 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        {/* <span className='text-4xl lg:text-dark-100 font-extrabold'>Used</span> */}
                        <img src={logo} alt="this is logo" className='w-64' />
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
        </div>
    );
};

export default Navbar;