// there are two methods under JSON 1. .parse() 2. .stringify()

let car = {
    name : "bmw",
    model:'2023',
    color:"red"
}
let j=JSON.stringify(car);
console.log(j);
let parsedJ = JSON.parse(j);
console.log(parsedJ);