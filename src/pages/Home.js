import React, { useState } from 'react';
import Header from '../components/Header';
import SlideShow from '../SlideShow';
import Footer from '../components/Footer';
import ItemList from '../items/ItemList';


const Home = () => {

    return (
        <div>
            <Header />
            <SlideShow />
            
            <ItemList style={{ backgroundColor: 'gray' }} />

            <Footer />
        </div>
    );
};

export default Home;
