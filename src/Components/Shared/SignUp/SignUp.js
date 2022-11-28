import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { useTitle } from '../../hooks/useTitle';

const SignUP = () => {
    useTitle("signUP")
    const { register, handleSubmit } = useForm();
    const {createUser, ProfileUpdate} = useContext(AuthContext)
    const hanlderSignUp = data => {
        
        createUser(data.email, data.password)
        .then(res=> {
            const user = res.user;
            console.log(user);
            ProfileUpdate(data.name)
            .then(()=>{
                toast.success('Profile is updated')
                users(data.name, data.email, data.option)
            }).catch(err=> console.error(err))
        }).catch(err=> console.error(err))
    }

    const users = (name, email, option)=>{
        const user = {name, email, option}
        fetch(`https://used-products-resale-server-1aminul.vercel.app/users`,{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res=> res.json())
        .then(data=> {
            console.log(data);
        })
    }
    return (
        <div className='flex justify-center items-center my-32'>
            <div className='w-96 shadow-xl rounded-lg p-4'>
                <h2 className="text-2xl font-bold text-accent text-center">Sign Up</h2>
                <form onSubmit={handleSubmit(hanlderSignUp)}>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name")} type='text' className='input input-bordered w-full' />
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email")} type='email' className='input input-bordered w-full' />
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type='password' {...register("password")} className='input input-bordered w-full' />
                    <label className="label">
                        <span className="label-text">Select Your Option</span>
                    </label>
                    <select {...register("option")} className="select select-bordered w-full">
                        <option>Buyer</option>
                        <option>Seller</option>
                    </select>
                    <input type="submit" value='Sign Up' className='w-full bg-accent rounded py-3 mt-6 text-white' />
                </form>
                <p className='my-6 text-center'>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link> </p>
               
            </div>
        </div>
    );
};

export default SignUP;