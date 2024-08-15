import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../pages/Main App/Navbar/Navbar'

const MainLayout = () => {
  return (
    <div className='mainapp-navbar'>
      <Navbar />
      <div className='main-content'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout