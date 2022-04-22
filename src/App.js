import './styles/App.css';
import NavBar from './Componets/NavBar';
import { useState } from 'react';
import FeaturedPost from './Componets/FeaturedPost';
import ListPost from './Componets/ListPost';
import Posts from './Resources/Posts';
import CreatePost from './Componets/CreatePost';
import { isVisible } from '@testing-library/user-event/dist/utils';

function App() {
//Declarar los estados 
  const [isVisible, setIsVisible] = useState(false);
  const [allPosts, setAllPosts] = useState(Posts());
  const [postId, setPostId] = useState();

  const onPress = () => {
    setIsVisible(!isVisible);
  };

  const handleOnSave = (post) => {
    //sAVE A NEW POST, ADD NEW POST TO ALLPOST
    if(postId) {
      const copyOfPosts = Array.from(allPosts);
      const newAllPosts = copyOfPosts.filter((post, index) => index !== postId);//[...copyOfPosts, post]; 
      setAllPosts([...newAllPosts, post]);
      setPostId();
    }
    else{
      setAllPosts([...allPosts, post]);
    }
    setIsVisible(false); //onPress()
  };
//Edit a post acord to post id, function get id 
  const handleOnEdit = (postId) => {
    setIsVisible(true); //onPress()
    setPostId(postId);
  };

  return (
    <div className="App">
     {/*  whwn we press a botton the content is not visible or is visible */}
      <NavBar onPress={()=>onPress()}/>

      {
        //if is different to visible we show create post that is a component that have a form for create a new note
        isVisible ?
        <CreatePost 
        //here we share props to the component
          postToUpdate={allPosts[postId]}
          onPress={()=>onPress()}
          onSave={handleOnSave}
        />
        :
        <>
          <FeaturedPost 
            updatedAt={"May 13 2021"} 
            height={250} 
            width={250} 
            title={"The Internet of Medical Things: The Healthcare Revolution"} 
            content={"Since the Pandemic started, we have experienced a growing dependency on technology in the healthcare industry, which demands continuous innovation to deal with the new health dangers."} 
            image={"https://www.w3schools.com/tags/img_girl.jpg"}
          />
{/* here we add another componet that is called list post were we can show al post, and also we share props */}
          <ListPost posts={allPosts} onEdit={handleOnEdit}/>
        </>
      }     
     
    </div>
  );
}

export default App