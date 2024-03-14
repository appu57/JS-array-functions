console.log([44,33]>[90]);//false
console.log([9]>[2]);//true

//when aarray is compared with > , the javascript converts array into string and checks 4>9 false
//9>2 true , comparison takes place character by characte

"###############################################################################################################################################################"
console.log("2" && "2"); //2
console.log("2" && "3"); //3


//In JavaScript, the logical AND (&&) operator returns the value of the first operand if it can be converted to false; otherwise, it returns the value of the second operand.
//In this case, both operands "2" are truthy values, so the logical AND operator returns the second operand, which is "2".

"###############################################################################################################################################################"
if([])
{
    console.log("[] is a truthy value so prints ");
}

if([] == false)
{
    console.log(" == converts [] to empty string and when empty strin is converted with other datatype it converts both the value to numbers so empty string is converted to 0 and false to 0")
}


if("")
{
    console.log("empty string");
}
else{
    console.log("if empty string used indiviually it is treated as false")
}