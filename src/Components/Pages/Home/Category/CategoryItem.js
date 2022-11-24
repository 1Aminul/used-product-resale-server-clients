import React from 'react';
import { useLoaderData } from 'react-router-dom'
const CategoryItem = () => {
    const data = useLoaderData()
    const { item } = data
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-3 my-20'>
            {
                item.map(category =>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={category.image1} className='w-full' alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{category.name}</h2>
                        <h2 className="text-xl font-bold text-success">TK {category.description.resaleprice}</h2>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p>Brand: {category.description.Brand}</p>
                                <p>Condition: {category.description.Condition}</p>
                                
                                
                            </div>
                            <div>
                                <p>Model: {category.description.Model}</p>
                                <p>Year of use: {category.description.used}</p>
                                <p className="text-default">Original Price: {category.description.price}</p>
                                
                               
                            </div>
                        </div>
                        <hr />
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default CategoryItem;