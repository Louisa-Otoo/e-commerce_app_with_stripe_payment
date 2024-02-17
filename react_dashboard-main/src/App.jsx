import React from 'react'
import Router from './Router';
import './App.css'
import { AdminAuthProvider } from './Context/AdminAuth'


const App = () => {
  return (
    <>
      <AdminAuthProvider>
        <Router />
      </AdminAuthProvider>
    </>
  )
}


export default App;
