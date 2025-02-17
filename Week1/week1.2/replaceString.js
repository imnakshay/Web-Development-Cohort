let string = "Hello World";
function replaceString(string,target, update){
    return(string.replace(target,update));
}
let newString =  replaceString(string,"Hello","Hi");
console.log(newString);