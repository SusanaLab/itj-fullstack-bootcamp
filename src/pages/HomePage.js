import React from 'react'
import AddComment from '../Componets/coment/AddComment';
import FeaturedPost from '../Componets/FeaturedPost'
import ListPost from '../Componets/ListPost'
 export const HomePage = ({posts, OnEdit, onDelete}) => {
     return (
    
   
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
          <ListPost posts={posts} onEdit={OnEdit} onDelete={onDelete}/>
        </>

  );
}
