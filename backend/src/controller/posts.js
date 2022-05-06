const postService = require("../services/post-service")

const getPosts = async(req, res, next) => {
try{
    const posts = await postService.getPosts();
    res.setHeader("Total", posts.length);
    res.json(posts);
}
catch(error){
next(error);
}  
}

const getPost = async (req, res, next) => {
const id = req.params.id;
   try{
const post = await postService.getPost(id);
console.log(post);
if(!post) {
return res.status(404).json({message:"post not found"})
}
res.json(post)
   }
   catch (error){
    next(error);
   }
};

const createPost = async(req, res) => {
    const newPost = req.body

  try {
const savePost =await postService.createPost(newPost)
res.status(201).json(savePost);
  }
  catch(error){
console.log(error);
res.status(500).json({message:"internal error"})
  }
    

}

const updatePost = async (req, res, next) => {
    const id = req.params.id;
    const postToUpdate = req.body;
    try {
        const updatedPost= await postService.updatePost(id, postToUpdate);
        if(!updatePost) {
            return res.status(404).json({message:"post not found"})
          } res.json(updatedPost);
            }
             catch(error){
           next(error);
             }
};

const deletePost = async (req, res, next) => {
    const id = req.params.id;
    try {
     await postService.deletePost(id)
     return res.status(404).json({message:"post deleted correctly"})
          }
          catch(error){
        next(error)
          }
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}