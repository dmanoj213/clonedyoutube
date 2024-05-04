import React from 'react';
import Button from './Button';

const blist = ["All","Gaming","Movies","Cricket","Bollywood","Sports","WWE","Kannada","pop","Music","Hot","Cooking","commentory","Standup","Sitcoms"];

const ButtonList = () => 
{

  return (
       <div className='flex overflow-x-scroll'>
       {blist.map(item => <Button key={item} name={item}/>)}
       </div>
  )
}

export default ButtonList;
