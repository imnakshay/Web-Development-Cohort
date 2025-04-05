const express = require("express");
const app = express();

let users = {};

app.use(express.json());

// app.post("/signUp",(req,res)=>{
//     const {username,password}=req.body;
//     if(!username || !password){
//         return res.status(400).json({message:"Username or Password can not be empty"});
//     }
//     if(users[username]){
//         return res.status(401).json({message:"Username already exists."});
//     }
//     users[username]=password;
//     return res.json({message:"SignUP successfull"});

// })

app.post("/signIn",(req,res)=>{
    const {username,password}=req.body; 
    if(!username || !password){
        return res.status(400).json({message:"Username or Password cannot be empty"});
    }
    if(!users[username]){
        users[username]=password;
        return res.status(405).send("signUP done");
    }
    if(users[username]===password){
        return res.json({message:"LogIN successfull"})
    }
    return res.status(403).json({message:"Login Failed: Wrong username or password"});
})

app.listen(3000,()=>{
    console.log("Server Started Please visit : localhost:3000");
})