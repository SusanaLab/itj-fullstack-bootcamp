import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/forms.css";
import { getPostById } from "../api/apiPost";

const CreatePost = ({  onSave, postId}) => {

  const newPost = {
    title: "",
    body: "",
    imageUrl: "",
    author: "",
    updatedAt: new Date().toISOString(),

  };

  const [newPostState, setNewPostState] = useState( newPost);
const fetchingPostById= async ()=> {
const res = await getPostById(postId) ;
setNewPostState(res)
};

useEffect(()=>{
if(postId){
  fetchingPostById();
}else{
  setNewPostState(newPost)
  console.log("creating new post");
}
},[])


  const handleOnChange = (event) => {
    //here we check for changes and save the values to the array, using key y value for new note, and add to new post state
    const name = event.target.name;
    const value = event.target.value;
    setNewPostState({...newPostState, [name]: value});
  };

  return(
    <div className="container">
      <form id="create-post-form" className="post-form">
        <div className="input-field">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Add a title"
            //this is how we save in a obtect a new note
            value={newPostState.title}
            //we detect the change imput to get the value
            onChange={handleOnChange}
          />
        </div>
        
        <div className="input-field">
          <label>Body</label>
          <textarea
            type="text"
            name="body"
            placeholder="Add a body to the post"
            value={newPostState.body}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-field">
          <label>Author</label>
          <textarea
            type="text"
            name="author"
            placeholder="Add a author to the post"
            value={newPostState.author}
            onChange={handleOnChange}
          />
        </div>

        <div className="input-field">
          <label>Image</label>
          <input
            type="text"
            name="imageUrl"
            value={newPostState.imageUrl}
            onChange={handleOnChange}
          />
        </div>

        <div className="buttons-container">
          <Link to="/">
            <button type="button">Cancel</button>
          </Link>

          <button type="button" onClick={() => onSave(newPostState)}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}


export default CreatePost;


