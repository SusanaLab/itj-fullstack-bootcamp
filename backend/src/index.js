//Enviroment variables
require('dotenv').config()

const cors = require('cors');
//Bring express to our project
const express = require("express");
const { append } = require("express/lib/response");
console.log(append);
const mongoose=require("mongoose");

const postsRoutes =require('./routes/posts.routes') 
//Instance express
const app = express();
app.use(express.json());
app.use(cors());

app.use((error, req, res, next)=>{
console.log(error.stack);
res.status(500).json({message: error.message})
});

app.use(postsRoutes)

const connectDb=()=>{
    try{
  mongoose.connect(process.env.DB_URI)
  console.log("Dta base connected")
    }catch(error){
console.log(error);
    }
};
app.listen(process.env.PORT, ()=> {
    connectDb()
    console.log("Server is listening on port "+ process.env.PORT)
});

