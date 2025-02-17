let fs = require("fs");
function read(){
    return new Promise((resolve,reject)=>{
        fs.readFile("Week1/week1.3/asynchronous/new.txt","utf-8",(err,data)=>{
            resolve(data);
        })
    })
}
//this the call back function
function print(data){
    console.log(data);
}
console.log("before the function");
read().then(print);
console.log("after the function");


//this is the simple way of the above example........
// new Promise((resolve,reject)=>{
//     fs.readFile("Week1/week1.3/asynchronous/new.txt","utf-8",(err,data)=>{
//         resolve(data);
//     })
// }).then((data)=>{
//     console.log(data);
// })