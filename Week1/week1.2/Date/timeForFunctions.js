// let currentDate = new Date();
// let ctime = currentDate.getTimezoneOffset();
// console.log(ctime);
// console.log(currentDate);

//writing a function that calculates the time to run a function

function sumOfMillion(){
    let a= 0;
    for(let  i = 0;i<1500000000;i++){
        a = a+i;
    }
    console.log(a);
}
let beforeTime = new Date();
let btime = beforeTime.getTime();
sumOfMillion();
let afterTime = new Date();
let atime = afterTime.getTime();
console.log((atime-btime)/1000+'s');