const express = require("express");
const app = express();

let kidneyHealth = ["70%","75%"];

app.get("/",(req,res)=>{
    res.send(`The number of kidney is: ${kidneyHealth.length}\nHealth are : ${kidneyHealth}`);
});

app.post("/",(req,res)=>{
    kidneyHealth.push("89%");
    kidneyHealth.sort((a,b)=>parseInt(a)-parseInt(b));
    res.send("New kidney inserted successfully with 89% health");
})

app.put("/",(req,res)=>{
    kidneyHealth.sort((a,b)=>parseInt(b)-parseInt(a));
    kidneyHealth[kidneyHealth.length-1] = "100%";
    res.send("New kidney is replaced with 100% health kidney..");
})
app.delete("/",(req,res)=>{
    kidneyHealth.sort((a,b)=>parseInt(b)-parseInt(a));
    kidneyHealth.pop();
    res.send("Last kidney removed");
})

app.listen(3000,()=>{
    console.log("Server Started at port number 3000");
})