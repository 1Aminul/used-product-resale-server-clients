import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { useTitle } from '../../hooks/useTitle';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    useTitle('login')
    const [error, setError] = useState('')
    const { register, handleSubmit } = useForm();
    const { LogIn, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';




    const hanlderLogin = data => {
        console.log(data);
        LogIn(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate(from, { replace: true });
            }).catch(err => setError(err.message))

    }


    const handlerGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const user = res.user;
                if (user) {
                    const userInfo = {
                        name: user?.displayName,
                        email: user?.email
                    }
                    fetch(`https://used-products-resale-server-1aminul.vercel.app/users`, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userInfo)
                    }).then(res => res.json())
                        .then(data => {
                            console.log(data);
                        })
                }
            }).catch(error => console.error(error))
    }



    return (
        <div className='flex justify-center items-center my-32'>
            <div className='w-96 shadow-xl rounded-lg p-4'>
                <h2 className="text-2xl font-bold text-accent text-center">Login</h2>
                <form onSubmit={handleSubmit(hanlderLogin)}>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email")} type='email' className='input input-bordered w-full' />
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type='password' {...register("password")} className='input input-bordered w-full' />
                    <input type="submit" value='Login' className='w-full bg-accent rounded py-3 mt-6 text-white' />
                </form>
                <label className="label">
                        <span className="label-text text-error">{error}</span>
                    </label>
                <p className='my-6 text-center'>Have no account? <Link className='text-secondary' to='/signup'>Create New account</Link> </p>
                <div className="divider">OR</div>
                <button onClick={handlerGoogleLogin} className='btn btn-outline w-full'><FaGoogle className='mr-3 text-xl text-success'/> Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;