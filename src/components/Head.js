import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_API, hamberger_logo, user_logo, youtube_logo } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { togglemenu } from '../utils/navSlice';
import { cacheResults } from '../utils/searchSlice';
import { toggleProfileMenu } from '../utils/ProfileSlice';



const Head = () => 
{
    
    const [searchQuery,setSearchQuery] = useState("");

    const [suggestions, setSuggestions] = useState([ ]);

    const [showSuggestions , setShowSuggestions] = useState(false);

    const searchCache = useSelector((store)=> store.search)

    const dispatch = useDispatch();

    useEffect(()=>
    {
       const timer = setTimeout(()=> 
       {

   
        if (searchCache[searchQuery])
        {
            setSuggestions(searchCache[searchQuery]);
        }

        else{
            getSearchSuggestion()

        }
        
       },200)
       
     

       return () =>
       {
        clearTimeout(timer);
       }
    },[searchQuery])

  
    const getSearchSuggestion = async () =>
    {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
       
        setSuggestions(json[1]);
      
        dispatch(cacheResults([{
            [searchQuery]: json[1],
        }]))
    }
    

    const handleToggleMenu = () =>
    {
       dispatch(togglemenu());
    }

    const handleToggleProfileMenu = () =>
    {
        dispatch(toggleProfileMenu());
    }
  return (
    <div className='grid grid-flow-col mt-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img onClick={()=> handleToggleMenu()} className='h-8 mx-2 cursor-pointer' alt='hamberger-logo' src={hamberger_logo}/>
            <img className='h-10 mx-3 ' alt='youtube-logo' src={youtube_logo}/>
        </div>
        <div  className='col-span-10 items-center'>
            <div>
            <input
             value={searchQuery}
             onChange={(e)=> setSearchQuery(e.target.value)}
             onFocus={()=> setShowSuggestions(true)}
             onBlur={()=> setShowSuggestions(false)}
            className='w-1/2 border border-gray-700  text-center px-2 rounded-l-full py-1' 
            type='text' placeholder='search here'/>
            <button className='border border-gray-700 rounded-r-full py-1 bg-gray-600 text-white'>Search</button>
            { showSuggestions && <div className='absolute bg-white shado-lg w-[36rem] border border-gray-200 shadow-lg rounded-lg'>
            <ul>
                { suggestions.map(s => <li key={s} className='py-2 shadow-sm hover:bg-gray-400 rounded-lg' >🔍 {s}</li>
              
                )}
            </ul>
            
             
            </div>}
                
            </div>
            
            
        </div>
        <div className='col-span-1'>
            <img
             onClick={() => handleToggleProfileMenu()}
             className='h-8' alt='user-logo' src={user_logo}/>
        </div>
    </div>
  )
}

export default Head;

