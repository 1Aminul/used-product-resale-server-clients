import React from 'react';

const Blog = () => {
    return (
        <div className='flex justify-center items-center my-20'>
            <div>
                <div className='border border-primary border-spacing-2 rounded-lg p-10'>
                    <h2 className="text-2xl text-primary font-bold">What are the different ways to manage a state in a React application?</h2>
                    <p>There are four main types of state you need to properly manage in your React apps:
                        <span>1.Local state</span>
                        <span>2.Global state</span>
                        <span>3.Server state</span>
                        <span>4.URL state</span>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Blog;