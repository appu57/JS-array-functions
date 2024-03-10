let fruits = ["apple" , "banana" , "orange" , "mango","apple" , "banana" , "orange" , "mango","orange" , "mango"];


/*  Push , Pop , shift , unshift */

console.log(fruits.push("lime"));
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.shift());  //removes element from front
console.log(fruits);
console.log(fruits.unshift("lime")); //adds element from fron
console.log(fruits);

fruits.splice(7,9); //remove elements from 3
console.log(fruits);
fruits.splice(4,5,"orange","mango"); //remove elements from 4 to 5 and adds 'orange" and mango into that index
console.log(fruits)

let a = [101,102,103,104,105,106,107,108,109,NaN];
console.log(a.indexOf(102));  //1
console.log(a.includes(102)); //true
console.log(a.indexOf(NaN));  //-1



let boolean=fruits.find((value,index,arr)=>{
    if(value== "orange")
    {
        return true;
    }
    else{
        return false;
    }
});
console.log(boolean);

/* To modify the existing array use map */

let value = a.map((value,index,arr)=>{
        return value*2;
})
console.log(value);

/* For Each function*/

let sum=0;
a.forEach((vals,index,arr)=>{
    sum+=vals;
});

console.log(sum);

/* Filter function */

let filteredValue=a.filter((value,index,arr)=>{
     value%2==0;
})

console.log(a);

/* Reduce function */

let max = a.reduce((prev,curr)=>{
     if(prev<curr)
     {
        return curr;
     }
     return prev;
},-1);

console.log(max);

/* Set Datastructure */

let newfruits = new Set(fruits);
let unique = [...newfruits]; //saves only unique value in an array
console.log(unique);

newfruits.add("mango");
newfruits.delete("lime");
newfruits.has("lime");

/* Sorting in array can be solved using a comparator function  because js sorts an array using ASCII*/

a.sort((a,b)=>{
    return a-b;
});

console.log(a);


/* Arr.with() */

const data = [
    {sum:1},{sum:2}
];

const res = data.reduce((accumator,reducer)=>{
    return accumator+ reducer.sum   //sum of numbers
},0);

console.log(res);


/*To sorted */

// let prime = [5,4,3,2,1];
// let sorted = prime.toSorted();  //do not modify prime array but when we use sort() the prime array is also modified
// console.log(sorted);
// console.log(prime);


let array =[1,2,3,4];
array[7]=7; //[1,2,3,4,,,7] sparse array
console.log(array[5]); //is empty but behaves undefined 

const mapped=array.map(i=>i);
console.log(mapped);

console.log("" == []);  //true when used with == converts [] to string using [].toString()
console.log([].toString());