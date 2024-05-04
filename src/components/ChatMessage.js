import React from 'react'
import { user_logo } from '../utils/constants';

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-md'>
        <img className='h-8' alt='user-logo' src={user_logo}/>
        <span className='font-bold px-1'>{name}</span>
        <span className='text-sm'>{message}</span>
    </div>
  )
}

export default ChatMessage; 
