import React from "react";
import Post from "./Post";
//here we get recibe post and also edit and we return all post.
const ListPost = ({posts, onEdit}) => {
  return (
    <>
      {
        posts.map((post, onEdit, onDelete) => {
          return <Post 
          id={post._id}
          key={post._id} 
          post={post} 
          onEdit={()=>onEdit(post._id)}
          onDelete={()=>onDelete(post._id)}
          />
        })
      }
    </>
  );
}


export default ListPost;