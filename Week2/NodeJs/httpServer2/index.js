const express = require("express");
const app = express();

app.get("/",(req,res)=>{
	let num  =parseFloat( req.query.num);
	res.send(`The output of the query is ${num*num}`);
});

app.listen(3000,()=>{
	console.log("Server started at port 3000");
});
