import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthProvider';
const AddProducts = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()


    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`)
            const data = await res.json()
            return data;
        }
    })

    const User = users.find(emailUser => emailUser.email === user?.email)

    const handlerAddProduct = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.file[0])

        const imghostkey = process.env.REACT_APP_image_apiKey

        fetch(`https://api.imgbb.com/1/upload?key=${imghostkey}`, {
            method: "POST",
            body: formData,
        }).then(res => res.json())
            .then(datas => {

                const product = {
                    email: user?.email,
                    name: User.name,
                    verification: User.verification,
                    productName: data.name,
                    price: data.price,
                    phone: data.phone,
                    location: data.location,
                    year: data.year,
                    condition: data.condition,
                    description: data.description,
                    image: datas.data.display_url
                }

                fetch(`http://localhost:5000/products`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(product)
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.acknowledged) {
                            toast.success('Product added successfully')
                            navigate('/dashboard/myproducts')
                        }
                    })
            })


    }
    return (
        <div>
            {
                !User?.verification ?

                   <div className='flex justify-center items-center mt-10'>
                     <h2 className='text-error text-4xl font-bold'>You are not Verify by Admin.If you verify you will add the product.</h2>
                   </div>
                    :
                    <div className='flex justify-center items-center my-32'>
                        <div className='w-4/5 shadow-xl rounded-lg p-4'>
                            <h2 className="text-2xl font-bold text-accent text-center">Add Product</h2>
                            <form onSubmit={handleSubmit(handlerAddProduct)}>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                                    <div>
                                        <label className="label">
                                            <span className="label-text">Product Name</span>
                                        </label>
                                        <input {...register("name")} type='text' className='input input-bordered w-full' />
                                    </div>

                                    <div>
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input {...register("price")} type='text' className='input input-bordered w-full' />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Mobile Number</span>
                                        </label>
                                        <input {...register("phone")} type='text' className='input input-bordered w-full' />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Location</span>
                                        </label>
                                        <input {...register("location")} type='text' className='input input-bordered w-full' />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Year of Purchase</span>
                                        </label>
                                        <input {...register("year")} type='text' className='input input-bordered w-full' />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Condition Type</span>
                                        </label>
                                        <select  {...register("condition")} className="select select-bordered w-full">
                                            <option selected>Good</option>
                                            <option>Excellent</option>
                                            <option>Fair</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="label">
                                            <span className="label-text">Upload Photo</span>
                                        </label>
                                        <input {...register("file")} type='file' />
                                    </div>

                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea {...register("description")} className="textarea textarea-bordered w-full h-24" placeholder="Description"></textarea>
                                </div>

                                <input type="submit" value='Submit' className='w-full bg-accent rounded py-3 mt-6 text-white' />
                            </form>
                        </div>
                    </div>

            }
        </div>
    );
};

export default AddProducts;