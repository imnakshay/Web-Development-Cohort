
// let string = "veer is a bad boy!";
// let newString = string.replace("bad boy!","good boy");
// console.log(newString);
// //now we discuss the use of trim

// let str = "  hello world     ";
// console.log(str.trim());

// string.slice we slice based on the starting and ending basically we make subarray..
// let string = "Hello world this is and example.";
// let newString = string.slice(1,4);
// console.log(newString);

//string.split() this is used to make an array based on a separator
// let string = "bello World This is an example";
// let newString = string.split("This");
// console.log(newString);

//string.toUpperCase() is used to convert an string to an uppercase String
// let string = "hello world. this is an world.";
// let newString = string.toLowerCase();
// console.log(newString);

//parseInt is method is used for taking out a int from a string.
//same is float...parseFloat("to take out float");
// let string  = "3.14";
// console.log(parseInt(string));
// console.log(parseFloat(string));

//pop is the function used for popping out the last value and returns the last value;
// let array = [1,2,3,4,5];
// console.log(array.pop());
// console.log(array);

//shift method is used for popping out the element from the beginning and return the deleted value...
// let arr = [1,3,5,3,5];
// console.log(arr.shift());
// console.log(arr);

//unshift method is used for adding another value at starting and return the new length of the array..
// let arr = [1,3,5,36,5];
// console.log(arr.unshift(11));
// console.log(arr); 

//push method is used for adding a value at last of the array and returns the new length of the array..
// let arr = [23,5,3,4,35];
// console.log(arr.push(1));
// console.log(arr);

// concate method is used for adding another value to the other value
// let arr = [25,5,3,3,34];
// let arr2 = [253,35];
// console.log(arr.concat(arr2));
// console.log(arr);
// console.log(arr2);

// let arr = [25,5,3,3,34];
// arr.forEach((value,index,arr)=>{
//     value
// })

//map method is used for performing operation on every item of an array... and return a value and store that in new array...
// let arr = [12,23,5,3,5,43];
// let newArr= arr.map((value)=>{
    //     return value*2;
    // })
    // console.log(arr);
    // console.log(newArr);

//filter method is used on an array for performing an filter which passes the filter is returned and new array is created.
// let arr = [12,23,5,3,5,43,22];
// let newArr = arr.filter((value)=>value%2==0)
// console.log(newArr);

//array.sort() sort the array and returns the sorted array and also update the array....
// let arr = [12,53,23,5,3,5,43,22];
// let newArr = arr.sort();
// console.log(arr);
// console.log(newArr);

// //arr.sort()method along with the condition
// let arr = [12,53,23,5,11,13,3,5,43,22];
// arr.sort((a,b=arr[0])=>{
//     return a-b;
// })
// console.log(arr);

