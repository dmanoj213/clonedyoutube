import React from 'react'
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import CornerSideBar from './CornerSideBar';

const Body = () => {
  return (
    <div className='flex'>
       <SideBar/>
       <Outlet/>
       <CornerSideBar/>
       
       
    </div>
  )
}

export default Body;