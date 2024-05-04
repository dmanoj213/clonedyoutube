import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../utils/chatSlice';
import {getRandomName,getRandomText} from "../utils/helper";


const LiveChat = () => 
{
    const dispatch = useDispatch();

    const [liveMessage,setLiveMessage] = useState("");

    const chatMessages = useSelector((store)=> store.chat.messages);

useEffect(()=>
{
   const i =  setInterval(() => {
        console.log("Api Polling");

        dispatch(addMessages({
            name: getRandomName(),
            message : getRandomText(20),
           }))
        
    }, 1500);

    

   
    return ()=>
    {
        clearInterval(i);
    }
    
},[])
  return (
    <div>
        <div className='w-full h-[550px] ml-2 p-2 py-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((c,i) => <ChatMessage key={i} name={c.name} message={c.message}/>) }

        </div>

        <form className='w-full p-2 ml-2 border border-black flex *' onSubmit={(e)=>{
             e.preventDefault();

             dispatch(addMessages({
                name: "Manoj Kumar D",
                message: liveMessage,
             }))

             setLiveMessage(" ");
         }}>
            <input
             className=' w-96 border border-black rounded-lg'
             value = {liveMessage}
             onChange={(e)=>{
                setLiveMessage(e.target.value)
             }
              
            }
             type='text'
             placeholder='Chat here' />

             <button className='bg-green-400 rounded-md p-2 m-2'>Send</button>
        </form>
    

   
    </div>
  )
}

export default LiveChat;

