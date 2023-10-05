import React from 'react';
import './Home.css';
import Products from './Products';
import Hero from './Hero';
import Cards from './Cards';

const Home = () => {
  return (
    <>

    <div className='home'>
        {/* <Products/> */}
        <Hero />
        <Cards />
    </div>
    </>
  )
}

export default Home