import React from 'react'
import { user_logo } from '../utils/constants';

const Comment = ({data}) => 
{

const {name,text,replies} = data;
  return (

     
    <div className='flex shadow-lg bg-gray-200 rounded-lg p-2 m-2 my-2'>
       <img className='h-12 w-12' alt='user-info' src={user_logo}/>
       <div>
        <p className='font-bold'>{name}</p>
        <p >{text}</p>
        
       </div>
       

    </div>
  )
}

export default Comment;