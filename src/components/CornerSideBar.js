import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CornerSideBar = () => 
{

    const isProfileMenuOpen = useSelector((store)=> store.profile.isProfileMenuOpen)

    //early return
    if(!isProfileMenuOpen) return null;

   return (
    <div className='px-3 w-48 shadow-lg'>
        <ul className='pt-5'>
            <Link to={"/"}><li>⚽Profile</li></Link>
            <li>⚙settings</li>
            <li>⛑Sign-out</li>
        </ul>

    </div>
  )
}

export default CornerSideBar;