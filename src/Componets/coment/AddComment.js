import React, { useState} from "react";
import { Link} from "react-router-dom";

const AddComment = ({  onSaveComment, commentToUpdate }) => {

  const newComment = {  
    body: "",
    updatedAt: new Date().toISOString(),

  };
  const [newCommentState, setNewComment] = useState(commentToUpdate || newComment);
/*   const [newPostState, setNewPostState] = useState(postToUpdate || newPost); */

  const handleOnChange = (event) => {
    //here we check for changes and save the values to the array, using key y value for new note, and add to new post state
    const name = event.target.name;
    const value = event.target.value;
  /*   setNewPostState({...newPostState, [name]: value}); */
    setNewComment({...newCommentState, [name]: value});
  };

  return(
    <div className="container">
      <form id="create-post-form" className="post-form">
      
        <div className="input-field">
          <label>Body</label>
          <textarea
            type="text"
            name="body"
            placeholder="Add a body to the post"
            value={newCommentState.body}
            onChange={handleOnChange}
          />
        </div>

        <div className="buttons-container">
          <Link to="/">
            <button type="button">Cancel</button>
          </Link>

          {/* <button type="button" onClick={() => onSave(newPostState)}> */}
          <button type="button" onClick={() => onSaveComment(newComment)}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}


export default AddComment;