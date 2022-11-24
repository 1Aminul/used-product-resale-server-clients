import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {FaAngleRight} from 'react-icons/fa'

const Category = () => {
    const navigate = useNavigate()
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/category`);
            const data = await res.json();
            return data;
        }
    })
    const showCategoryItem = id =>{
        navigate(`/category/${id}`)
    }
    
    return (
        <div>
            <h1 className="text-4xl font-extrabold text-center">Here is {categories.length} category</h1>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-5 '>
            {
                categories.map(category =>
                    <div onClick={()=>showCategoryItem(category._id) }  className="card w-96 bg-success text-base-100 shadow-xl transition duration-350 hover:bg-gradient-to-r from-primary to-info ">
                        <div className="card-body">
                            <div className='flex items-center justify-between'>
                                <h2 className="card-title  text-3xl font-bold">{category.name} </h2>
                                <FaAngleRight className='text-5xl'/>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
           
        </div>
    );
};

export default Category;