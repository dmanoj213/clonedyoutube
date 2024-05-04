import React from 'react';
import CommentsList from './CommentsList';

const CommentsData = [
  {
    name: "Manoj Kumar D",
    text: "Good Morning This is Manoj Nice to Meet Yoi",
    replies : [
      {
        name: "Manoj Kumar D",
        text: "Good Morning This is Manoj Nice to Meet Yoi",
        replies : [
          {
            name: "Manoj Kumar D",
            text: "Good Morning This is Manoj Nice to Meet Yoi",
            replies : [
              
        
            ]
          },
        
          
    
        ]
      },
    
      

    ]
  },

  {
    name: "Manoj Kumar D",
    text: "Good Morning This is Manoj Nice to Meet Yoi",
    replies : [

    ]
  },

  {
    name: "Manoj Kumar D",
    text: "Good Morning This is Manoj Nice to Meet Yoi",
    replies : [

    ]
  },


      

  
]

const CommentsContainer = () => {
  return (
    <div className=' m-5 p-2' >
      <h1 className='font-bold text-xl'>Comments:</h1>
      <CommentsList comments={CommentsData}/>
     
    </div>
  )
}

export default CommentsContainer;