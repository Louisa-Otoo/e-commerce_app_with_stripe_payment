import React from 'react';
import { useState } from 'react';
import SidePanel from '../components/SidePanel/SidePanel';
import Header from '../components/Header/Header';
import HomeView from '../components/HomeView/HomeView';

import '../App.css'


const Dashboard = () => {
  const [openSidePanel, setOpenSidePanel] = useState(false);

  const OpenSidebar = () => {
    setOpenSidePanel(!openSidePanel)
  }
  return (
    <>
    <div className='grid-container'>

      <Header OpenSidebar={OpenSidebar}/>

      <SidePanel openSidePanel={openSidePanel} OpenSidebar={OpenSidebar} />

      <HomeView/>


    </div>
    </>
  )
}


export default Dashboard;