import React from "react";
import Post from "../Componets/Post";
import { useParams } from "react-router-dom";
import { getPostById } from "../api/apiPost";
import { useEffect, useState, useCallback} from "react";


export const DetailPostPage = ({ onDelete }) => {
  const params = useParams();
  const { postId } = params;
  const [post, setPost] = useState({})


  const fetchPost = useCallback(async () => {
    const res = await getPostById(postId);
    setPost(res);   
  }, [postId]);

  useEffect(()=>{
    fetchPost();
      },[postId, fetchPost]);
  
  //const post = findPostById(postId);
  return (
   <>
    <Post
        id={ post._id }
        post={ post }
        isDetails={ true }
        onDelete={ onDelete }
      />
   </>
  );
};
