import React from "react";
import Post from "./Post";
//here we get recibe post and also edit and we return all post.
const ListPost = ({posts, onEdit}) => {
  return (
    <>
      {
        posts.map((post, index) => {
          return <Post 
          index={index}
          key={post.updatedAt + post.title} 
          post={post} 
          onEdit={()=>onEdit(index)}/>
        })
      }
    </>
  );
}


export default ListPost;