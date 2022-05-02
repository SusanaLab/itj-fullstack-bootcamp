import './styles/App.css';
import NavBar from './Componets/NavBar';
import { useState } from 'react';
import FeaturedPost from './Componets/FeaturedPost';
import ListPost from './Componets/ListPost';
import Posts from './Resources/Posts';
import CreatePost from './pages/CreatePost';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { ContactUs } from './pages/ContactUs';
import { JoinOurTeam } from './pages/JoinOurTeam';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { useNavigate } from 'react-router-dom';
import { DetailPostPage } from './pages/DetailPostPage';
import { Error } from '../src/Componets/Error';
import { ShowComment } from './Componets/coment/ShowComment';
import AddComment from './Componets/coment/AddComment';

function App() {
  const navigate=useNavigate()
//Declarar los estados 
  const [isVisible, setIsVisible] = useState(false);
  const [allPosts, setAllPosts] = useState(Posts());
  const [postId, setPostId] = useState();

const findPostById=(id)=>{
  return allPosts[id];
}

  const handleOnSave = (post) => {
    //sAVE A NEW POST, ADD NEW POST TO ALLPOST
    if(postId || postId === 0) {
      const copyOfPost = allPosts.map((item,index)=>
      index=== postId?post:item
      );
     /*  const copyOfPosts = Array.from(allPosts);
      const newAllPosts = copyOfPosts.filter((post, index) => index !== postId);//[...copyOfPosts, post];  */
      setAllPosts(copyOfPost);
      setPostId();
    }
    else{
      setAllPosts([...allPosts, post]);
    }
    navigate("/")
/*    no regrese a la pagina navigate("/",{replace:true}) */
   // setIsVisible(false); //onPress()
  };

//Edit a post acord to post id, function get id 
  const handleOnEdit = (postId) => {
    // setIsVisible(true); //onPress()
    setPostId(postId);
    navigate("/create-new-post")
  };

  //  C       O         M          E         N         T         A         R       I        O

//   const [allComments, setAllComments] = useState();
//   const [commentId, setCommentId] = useState();

// const findCommentById=(id)=>{
//   return allComments[id];
// }

//   const handleOnSaveComment = (comment) => {
//     //sAVE A NEW POST, ADD NEW POST TO ALLPOST
//     if(commentId || commentId === 0) {
//       const copyOfComment = allComments.map((item,index)=>
//       index=== commentId?comment:item
//       );
//      /*  const copyOfPosts = Array.from(allPosts);
//       const newAllPosts = copyOfPosts.filter((post, index) => index !== postId);//[...copyOfPosts, post];  */
//       setAllComments(copyOfComment);
//       setCommentId();
//     }
//     else{
//       setAllComments([...allComments, comment]);
//     }
//     navigate("/")
// /*    no regrese a la pagina navigate("/",{replace:true}) */
//    // setIsVisible(false); //onPress()
//   };

// //Edit a post acord to post id, function get id 
//   const handleOnEditComment = (commentId) => {
//     // setIsVisible(true); //onPress()
//     setCommentId(commentId);
//     navigate("/create-new-comment")
//   };

  return (
    <div className="App">
 
      <NavBar/>
      <Routes>
      <Route 
          index 
          element={<HomePage posts={allPosts} onEdit={handleOnEdit} />} />
        <Route path="join-our-team" element={<JoinOurTeam/>} />
        <Route path="contact-us" element={<ContactUs/>} />
        <Route path="*" element={<Error/>} />
        <Route path="create-new-post" element={<CreatePost onSave={handleOnSave}  postToUpdate={allPosts[postId]} />} />
      {/*   <Route path="create-new-comment" element={<AddComment onSaveComment={handleOnSaveComment}  commentToUpdate={allComments[commentId]} />} /> */}
        <Route path="post/:postId" element={<DetailPostPage findPostById={findPostById}/>} />
      </Routes>
   {/*    {
        //if is different to visible we show create post that is a component that have a form for create a new note
        <CreatePost 
        //here we share props to the component
          postToUpdate={allPosts[postId]}
          onPress={()=>onPress()}
          onSave={handleOnSave}
        /> 
      } */}     
    </div>
  );
}

export default App

// /* 


// import './styles/App.css';
// import NavBar from './Componets/NavBar';
// import { useState } from 'react';
// import FeaturedPost from './Componets/FeaturedPost';
// import ListPost from './Componets/ListPost';
// import Posts from './Resources/Posts';
// import CreatePost from './pages/CreatePost';
// import { isVisible } from '@testing-library/user-event/dist/utils';
// import { ContactUs } from './pages/ContactUs';
// import { JoinOurTeam } from './pages/JoinOurTeam';
// import { Route, Routes } from 'react-router-dom';
// import { HomePage } from './pages/HomePage';
// import { useNavigate } from 'react-router-dom';
// import { DetailPostPage } from './pages/DetailPostPage';
// import { Error } from '../src/Componets/Error';
// import { ShowComment } from './Componets/coment/ShowComment';
// import AddComment from './Componets/coment/AddComment';

// function App() {
//   const navigate=useNavigate()
// //Declarar los estados 
//   const [isVisible, setIsVisible] = useState(false);
//   const [allPosts, setAllPosts] = useState(Posts());
//   const [postId, setPostId] = useState();

// const findPostById=(id)=>{
//   return allPosts[id];
// }

//   const handleOnSave = (post) => {
//     //sAVE A NEW POST, ADD NEW POST TO ALLPOST
//     if(postId || postId === 0) {
//       const copyOfPost = allPosts.map((item,index)=>
//       index=== postId?post:item
//       );
//      /*  const copyOfPosts = Array.from(allPosts);
//       const newAllPosts = copyOfPosts.filter((post, index) => index !== postId);//[...copyOfPosts, post];  */
//       setAllPosts(copyOfPost);
//       setPostId();
//     }
//     else{
//       setAllPosts([...allPosts, post]);
//     }
//     navigate("/")
// /*    no regrese a la pagina navigate("/",{replace:true}) */
//    // setIsVisible(false); //onPress()
//   };

// //Edit a post acord to post id, function get id 
//   const handleOnEdit = (postId) => {
//     // setIsVisible(true); //onPress()
//     setPostId(postId);
//     navigate("/create-new-post")
//   };

//   return (
//     <div className="App">
 
//       <NavBar/>
//       <Routes>
//       <Route 
//           index 
//           element={<HomePage posts={allPosts} onEdit={handleOnEdit} />} />
//         <Route path="join-our-team" element={<JoinOurTeam/>} />
//         <Route path="contact-us" element={<ContactUs/>} />
//         <Route path="*" element={<Error/>} />
//         <Route path="create-new-post" element={<CreatePost onSave={handleOnSave}  postToUpdate={allPosts[postId]} />} />
//         <Route path="create-new-comment" element={<AddComment onSave={handleOnSave}  commentToUpdate={allComments[commentId]} />} />
//         <Route path="post/:postId" element={<DetailPostPage findPostById={findPostById}/>} />
//       </Routes>
//    {/*    {
//         //if is different to visible we show create post that is a component that have a form for create a new note
//         <CreatePost 
//         //here we share props to the component
//           postToUpdate={allPosts[postId]}
//           onPress={()=>onPress()}
//           onSave={handleOnSave}
//         /> 
//       } */}     
//     </div>
//   );
// }

// export default App */