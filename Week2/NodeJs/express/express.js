const express = require("express");
const app = express();
app.get("/",(req,res)=>{
let num = parseInt( req.query.n);
let sq = sqr(num);
res.send(sq.toString());
});

function sqr(num){
        return num*num;
}
app.listen(3000,()=>{
console.log("server Started at port number 3000");
});
