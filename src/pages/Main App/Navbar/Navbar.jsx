import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Sidebar = () => {
  return (
    <>
      <div className='sidebar-container'>
        <div className='sidebar-content'>
          <div className='sidebar-account'>
            <Link to='/CirFin-Create/account'><img className='sidebar-icon' id='sidebar-account' src="./icons/account.png" alt="Account"/></Link>
          </div>
          <div className='sidebar-map'>
            <Link to='/CirFin-Create/map'><img className='sidebar-icon' id='sidebar-map' src="./icons/map.png" alt="Map" /></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar