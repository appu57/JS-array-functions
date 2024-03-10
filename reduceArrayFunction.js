
//Works as an HASHMAP  //

const arr=[1,2,2,3,3,4,4,4,4,5,6,7,8,8,99,9];

let count = arr.reduce((acc,current)=>{
    console.log(current);//acc is the accumulator that keeps track of the counts of each unique element.current is the current element being processed in the array.
    acc[current] = acc[current]> 0 ?acc[current]+1:1
    return acc
},{}); //collects the frequency , accumulator collects each array {}
// console.log(count);


"###############################################################################################################################################################"
//accumulator here holds the previous sum

const data = [
    {sum:1},{sum:2}
];

const res = data.reduce((accumulator,reducer)=>{
    return accumulator+ reducer.sum   //sum of numbers 
},0);

console.log(res);



//{} is used for the accumulator to hold array
// 0 is used for the accumulator to have initial value as 0