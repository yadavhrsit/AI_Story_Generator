import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from '../pages/HomePage';
function Layout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default Layout