import React from 'react';
import Comment from './Comment';


const CommentsList = ({comments}) => {
    //index as keys usage not recommended as its not the best practice
  return comments.map((comment,index) => (

     <div>
        <Comment key={index} data={comment}/>
        <div className='pl-5 ml-5 border border-black'>
            <CommentsList comments={comment.replies}/>
        </div>
     </div>

  ));
};

export default CommentsList;
