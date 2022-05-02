const mongoose = require("mongoose");

const ComentSchema = new mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
});
const PostSchema= new mongoose.Schema(
    
    {
        tittle:{
        type:String,
        required:true

        }  ,
        body:{
            type:String,
            required:true
        },
        imageUrl:{
            type:String,
        },
        author:{
            type:String,
            required:true
        },
        comments:[ ComentSchema ],
    },
    {timestamps:true }
)
  
const PostModel = mongoose.model("Post", PostSchema);
module.exports= PostModel;
