import React from 'react';
import Banner from '../Banner/Banner'
import HomeSection from '../HomeSection/HomeSection'
import Category from '../Category/Category'
const Home = () => {
    return (
        <div className='my-10'>
            <Banner></Banner>
            <HomeSection></HomeSection>
            <Category></Category>
        </div>
    );
};

export default Home;