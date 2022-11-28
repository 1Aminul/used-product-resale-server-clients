import React from 'react';
import Banner from '../Banner/Banner'
import HomeSection from '../HomeSection/HomeSection'
import Category from '../Category/Category'
import AdvertiseItem from '../AdvertiseItem/AdvertiseItem';
import { useTitle } from '../../../hooks/useTitle';
const Home = () => {
    useTitle("Home")
    return (
        <div className='my-10 w-full mx-auto'>
            <Banner></Banner>
            <HomeSection></HomeSection>
            <AdvertiseItem></AdvertiseItem>
            <Category></Category>
        </div>
    );
};

export default Home;