import React from 'react'
import SidePanel from '../components/SidePanel/SidePanel';
import Header from '../components/Header/Header';

import '../App.css'

export const Orders = () => {
  return (
    <>
    <div className='grid-container'>

      <Header/>

      <SidePanel/>

      <h2>Orders page</h2>
      
    </div>
    </>
  )
}


export default Orders;