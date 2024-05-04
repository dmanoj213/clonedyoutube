import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-300 rounded-lg px-5 py-2 m-2 hover:bg-gray-500  '>{name}</button>
    </div>
  )
}

export default Button;