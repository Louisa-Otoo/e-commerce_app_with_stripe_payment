import React from 'react'
import SidePanel from '../components/SidePanel/SidePanel';
import Header from '../components/Header/Header';
import ProductForm from '../components/ProductForm/ProductForm';

import '../App.css'

export const Products = () => {
  return (
    <>
    <div className='grid-container'>

      <Header />

      <SidePanel />

      <ProductForm />
      
    </div>
    </>
  )
}


export default Products;