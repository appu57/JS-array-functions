const arr1 = new Array(20);//Using new keywork with array , This creates a new array object with a length of 20. It does not populate the array with any actual elements, but rather creates an array-like object with 20 empty slots but Javascript doesnt initialise index due to which forEach will not console the value since forEach works only with array having index 
const arr2 = [1,2,3,4];

console.log(arr1.length); //20 

arr1.forEach((element)=>{
    console.log(element);  //the value is not printed as javascript creates array when new is used and also assigns undefined to it but will not initialise the index 
});

console.log({...arr2});   //destructuring array makes index into keys
console.log({...arr1});  //empty object since index is not created


//We can Print arr1 using forEach by destructuring the array

const arr = [... Array(20)];  //destructuring of array 
//Since Array(20) creates an array with 20 empty slots, spreading it into a new array effectively copies those empty slots, resulting in an array with 20 undefined elements.
arr.forEach((element)=>console.log(element)); //prints undefined 20 times 


//const arr1 is an array with a length of 20, but its elements are undefined.
//const arr is also an array with a length of 20, and its elements are undefined as well, but it's created using the spread operator to copy the empty slots from Array(20) into a new array.