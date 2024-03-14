function manipulateArray(arr) 
{
    arr.push(5);//arrays are objects and object are reference types due to pass by reference the original array also gets modified
    arr =[1];
    return arr;
}

let list = [1,2,3,4];
manipulateArray(list);
console.log(list);//1,2,3,4,5

list = manipulateArray(list);
console.log(list); //gives output as 1 because arr now points to a different refernce and since return is used , the refernce value is returned

//In memory arr and list point to same array value so when we do arr=[1]  now we r creating a new value and modifying the reference of parameter(arr) only
//the reference of original paramater(list) is not updated 
