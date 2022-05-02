const Post = require("../models/post");

const CreatePost= async(post)=> {
const newPost = new Post (post);
await newPost.save();
return newPost;
}
const getPosts=async()=>{
    const posts = await Post.find().lean().exec();
    return posts
}

const getPost =async(id)=> {
    const post = await Post.findById(id).lean().exec();
    return post;
}
const deletePost =async(id)=> {
   await Post.findByIdAndDelete(id).exec();
 
}
const updatePost =async(id, post)=> {
   const updatedPost =  await Post.findByIdAndDelete(id, post, {
       returnDocument:"after"
   }).lean().exec();
  return updatePost;
 }

module.exports= {
    CreatePost,
    getPosts,
    getPost,
    deletePost,
    updatePost
}
{}