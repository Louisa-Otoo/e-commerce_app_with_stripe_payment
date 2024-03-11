import React, { useState } from 'react'
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
   
      <Header setSearchQuery={setSearchQuery} />

      <Hero/> 

      <Products search={searchQuery} />

      <Footer/>


    </>
  )
}

export default Home
