import React from 'react'
import '../SidePanel/SidePanel.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/AdminAuth'


export const SidePanel = ({openSidePanel, OpenSidebar}) => {
  const { isLoggedIn, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/dashboard');
  };


  return (
    <>

    <aside id='sidebar' className={openSidePanel ? "responsive-sidebar": ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <i className="fa-solid fa-hand-holding-heart"></i> Heights
        </div>
        <span className='close' onClick={OpenSidebar}><i className="fa-solid fa-xmark"></i></span>
      </div>

      <ul className='sidebar-list'>

        <li className='sidebar-list-item'>
            <Link to='/dashboard'>
                <i className="fa-solid fa-gauge"></i> Dashboard
            </Link>  
        </li>

        <li className='sidebar-list-item'>
            <Link to='/customers'>
                <i className="fa-solid fa-users"></i> Customers
            </Link>  
        </li>

        <li className='sidebar-list-item'>
          <Link to='/orders'>
            <i className="fa-solid fa-note-sticky"></i> Orders
          </Link>
        </li>

        <li className='sidebar-list-item'>
            <Link to='/products'>
                <i className="fa-solid fa-gift"></i> Products
            </Link>
        </li>
      </ul>

      {/* <div className='userBtn'> */}
      <div className='userBtn'>
            {isLoggedIn ? (
              <button className='logoutBtn' onClick={handleLogout}>
                <i className="fa-solid fa-sign-out"></i> Logout
              </button>
            ) : (
              <Link to='/login'>
              <button className='loginBtn' onClick={login}>
                <i className="fa-solid fa-sign-in"></i> Login
              </button>
              </Link>
            )} 
      </div>    

      {/* </div> */}

    </aside>   
    </>
  )
}


export default SidePanel;