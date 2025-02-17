const fs = require("fs");

fs.readFile("Week1/week1.3/a.txt","utf-8",(err,data)=>{
    console.log(err);
    console.log(data);
})