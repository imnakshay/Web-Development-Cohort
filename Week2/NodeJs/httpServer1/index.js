//before importing the express module we must "npm init -y" and install express using "npm intall express";
const express = require("express"); //this is assigning a function to express variable.
const app = express(); // calling the assigned function which will return a object and assign to the app variable..
const port = 3000;  // this process will listen for the request in port 3000;

app.use(express.json());
app.use (express.text());
app.use(express.urlencoded({extended:true}));
app.get("/q",(req,res)=>{
    res.send(`The query send by you was ${req.query.message}`);
})
app.listen(port,()=>{
    console.log("Server Started"); // a call back is called once the server is started..
})
//we can alternatilvely create server like this
/* 

const app = (require("express"))();
app.get("/",(req,res)=>{ res.send("hello this is first server...")})
app.listen(port,()=>{"server started.."})

 */



//we hava to create a post request which can send me back what was my body...
app.post("/body",(req,res)=>{
    res.send(`This is data send from express server : ${req.body}`);
})