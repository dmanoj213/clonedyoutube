import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => 
{

    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)

    //early return
    if(!isMenuOpen) return null;

   return (
    <div className='px-3 w-48 shadow-lg'>
        <ul className='pt-5'>
            <Link to={"/"}><li>Home</li></Link>
            <li>Shorts</li>
            <li>Subscriptons</li>
        </ul>

        <ul>
            <h1 className='font-bold pt-5'>Subscriptons</h1>
            <li>Music</li>
            <li>sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>

        <ul>
            <h1 className='font-bold pt-5'>Watch Later</h1>
            <li>Music</li>
            <li>sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>


    </div>
  )
}

export default SideBar;