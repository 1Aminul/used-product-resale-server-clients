import React, {useContext} from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const {LogIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';




    const hanlderLogin = data=>{
       console.log(data);
       LogIn(data.email, data.password)
       .then(res=>{
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
       }).catch(err=> console.error(err))

    }
    return (
        <div className='flex justify-center items-center my-32'>
        <div className='w-96 shadow-xl rounded-lg p-4'>
            <h2 className="text-2xl font-bold text-accent text-center">Login</h2>
            <form onSubmit={handleSubmit( hanlderLogin )}>
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input {...register("email")} type= 'email' className='input input-bordered w-full' />
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type='password' {...register("password")} className='input input-bordered w-full' />
                <input type="submit" value='Login' className='w-full bg-accent rounded py-3 mt-6 text-white' />
            </form>
            <p className='my-6 text-center'>Have no account? <Link className='text-secondary' to='/signup'>Create New account</Link> </p>
            <div className="divider">OR</div>
            <button className='btn btn-outline w-full'>Continue With Google</button>
        </div>
    </div>
    );
};

export default Login;