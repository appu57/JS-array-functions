
//Works as an HASHMAP  //

const arr=[1,2,2,3,3,4,4,4,4,5,6,7,8,8,99,9];

let count = arr.reduce((acc,current)=>{
    //acc is the accumulator that keeps track of the counts of each unique element.current is the current element being processed in the array.
    acc[current] = acc[current]> 0 ?acc[current]+1:1
    return acc
},{}); //collects the frequency , accumulator collects each array {}
console.log(count);


"###############################################################################################################################################################"
//accumulator here holds the previous sum

const data = [
    {sum:1},{sum:2}
];

const res = data.reduce((accumulator,reducer)=>{
    return accumulator+ reducer.sum   //sum of numbers 
},0);

console.log("the addition "+res);



//{} is used for the accumulator to hold array
// 0 is used for the accumulator to have initial value as 0

"###############################################################################################################################################################"
//find max
let maxNum = (...num)=>{
    return num.reduce((acc,curr)=>{
        return acc > curr ? acc:curr;
    },0) //if u want to find sum,max just use 0 it is like assigning initial value to accumulator , here we r assigning 0 in first example we assign a array {}
};

console.log("The maximum number is "+maxNum(1,2,3,5,4));



"###############################################################################################################################################################"

//reverse an array
let array = [1,2,3,4,5];

let reverse = array.reduce((acc, curr) => {
    console.log(curr);//1,2,3,4,5
    console.log(acc); //[] , [1] , [2,1] ,[3,2,1]
    return [curr, ...acc];
  }, []); //puts curr element at first and assigns the rest of the accumulated array elements at the end of new array
  
//step1 has 1 as curr , and initial [] as acc , here 1 is put first and rest of acc [] is at last of new array , step2 has 2 as curr , and [1] as acc , here 2 is put first and rest of acc [1] is put at last of new arary by destructing [1] to 1 using spread opeator
//The reduce function iterates over each element of the original array (array). For each element (curr), it constructs a new array by prepending the current element to the accumulator array.
//[curr, ...acc]
//Here, the spread operator (...) is used to concatenate the current element curr with the accumulator array acc

console.log("The reverse array "+ reverse);

"###############################################################################################################################################################"