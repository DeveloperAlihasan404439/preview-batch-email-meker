import React from 'react';
import Banner from '../../Shared/Banner';
import Inbox from './../inbox/Inbox';
import Blog from '../blog/Blog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inbox></Inbox>
            <Blog></Blog>
        </div>
    );
};

export default Home;