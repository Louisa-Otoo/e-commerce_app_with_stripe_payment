import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './Pages/Dashboard';
import Login from './Pages/Login';
import Customers from './Pages/Customers';
import Orders from './Pages/Orders';
import Products from './Pages/Products';
import { ProtectedRoute } from './Pages/ProtectedRoute';


export const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/dashboard" element={<Index/>}/>
      <Route path="/login" element={<Login/>}/>

      <Route element={<ProtectedRoute/>}>
      <Route path="/customers" element={<Customers/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/products" element={<Products/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default Router;