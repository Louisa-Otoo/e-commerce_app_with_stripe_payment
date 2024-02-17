import React from 'react'
import SidePanel from '../components/SidePanel/SidePanel';
import Header from '../components/Header/Header';

import '../App.css'


const Customers = () => {
  return (
    <>
      <div className='grid-container'>
        <Header/>

        <SidePanel/>

        <h2>Customers Page</h2>
      
        
      </div>
    </>
  )
}


export default Customers;