// reduce function is used where we will take all the elements of the array and come out with a single result
// like sum of all element in an array
//find largest/smallest number in an array

// non-functional way to find sum

const arr=[1,2,3,4,5,89,12,34,0,78];
function sum(arr){
    let sum =0;
    for (let index = 0; index < arr.length; index++) {
        sum = sum + arr[index];
        
    }
    return sum;
}

console.log(sum(arr));

// filter function takes two parameters 1) one fuction which has two parameter i) acc- accumulator ii) curr- reperesents the current element of array
// 2) second parameter to reduce function is a value, this value will act as the starting value of accumulator

const output = arr.reduce((acc, curr)=>{
    acc = acc+ curr;
    return acc;
},0);

console.log(output);

// find the largest value in array

const largest = arr.reduce((acc, curr)=>{
    if(acc>curr) acc= acc;
    else acc= curr;
    return acc;
},Number.MIN_VALUE)
console.log(largest);

const users = [
    {firstName:"Shubham", lastName:"Kumar", age:24},
    {firstName:"Padma", lastName:"Kumar", age:25},
    {firstName:"Chirag", lastName:"Kumar", age:26},
    {firstName:"Saket", lastName:"Kumar", age:24}
];
//list of full names
const fullname= users.map((user)=>{
    return user.firstName +" "+ user.lastName;
})
console.log(fullname);
//frequency of people of each age group
//{24:2, 25:1, 26:1}
//initially acc is empty, if doesnot has 24 put 24 in it, and if while looping it again encounters 24 then inc the frequency of it.
const noOfAge= users.reduce((acc, curr)=>{
    
    if(acc[curr.age]){
        acc[curr.age]++;
    }else{
        acc[curr.age]=1;
    }
    console.log('accumulator', acc);
    return acc;
},{})

console.log(noOfAge);
//output-
//accumulator {}
// accumulator { '24': 1 }
// accumulator { '24': 1, '25': 1 }
// accumulator { '24': 1, '25': 1, '26': 1 }
//accumulator { '24': 2, '25': 1, '26': 1 }



const users1 = [
    {firstName:"Shubham", lastName:"Kumar", age:24},
    {firstName:"Padma", lastName:"Kumar", age:25},
    {firstName:"Chirag", lastName:"Kumar", age:26},
    {firstName:"Saket", lastName:"Kumar", age:24}
];
//first name of all the users whose age<26

const usingFilter = users1.reduce((acc, curr)=>{
        if(curr.age<26){
             acc.push(curr.firstName)
        }
        return acc;
},[])//accumulator can be of any data type , i could have also used {} for acc, it depends on ouput format we want

console.log(usingFilter);
