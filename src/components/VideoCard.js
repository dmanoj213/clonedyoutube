import React from 'react'

const VideoCard = ({info}) => 
{


    const {snippet,statistics} = info;

    const {title,channelTitle,thumbnails} = snippet;
   

  
  return (
    <div className='p-2 m-2 w-72 py-2 shadow-lg rounded-lg'>
    <img className='rounded-lg' alt='thumbnails' src={thumbnails.medium.url}/>
    <ul>
      <li className='font-bold'>{title}</li>
      <li>{channelTitle}</li>
      <li>{statistics.viewCount} - views</li>
    </ul>
    
   </div>
  )
}

export default VideoCard;