let arr = [1,2,3,4,5];


let arr2 = arr.map(v=>v*2)

let arr3 = arr.filter((v,i,arr)=>{
    if(v%2==0) return true;
});
console.log(arr3);