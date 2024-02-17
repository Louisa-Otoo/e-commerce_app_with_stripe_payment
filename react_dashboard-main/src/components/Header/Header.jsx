import React from 'react'
import '../Header/Header.css'
import { useAuth } from '../../Context/AdminAuth'
// import { Link } from 'react-router-dom'

export const Header = ({OpenSidebar}) => {
  const { isLoggedIn, isAdmin, logout } = useAuth();

  return (
    <>
    <header className='header'>
      <div className='menu-icon'>
        <i className="fa-solid fa-bars" onClick={OpenSidebar}></i>
      </div>

      <div className='header-left'>
        <input type="text" placeholder='search' className='search'/>
        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
      </div>

      <div className='header-right'>
        
            <i className="fa-regular fa-envelope"></i>

            <i className="fa-regular fa-bell"></i>

            <i className="fa-regular fa-user"></i>
            
      </div>
    </header>
    </>
  )
}


export default Header;