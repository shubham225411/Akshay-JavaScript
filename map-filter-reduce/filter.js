// filter fuction is basically used to filter out the values
// suppose filter out all the odd/even values from the array

const arr =[1,2,3,4,5,6]

const filteredArr= arr.filter((x)=>{
    if(x%2===0){
        return x;
    }
})
const modify = arr.filter((x)=>{
    if(x===1){
        return 
    }
    return x;
})
console.log(modify);// you will expect answer [2,2,3....] but still the answer will be same as original array
// its bcz the filter cant modify the original array
console.log(filteredArr);

const users = [
    {firstName:"Shubham", lastName:"Kumar", age:24},
    {firstName:"Padma", lastName:"Kumar", age:25},
    {firstName:"Chirag", lastName:"Kumar", age:26},
    {firstName:"Saket", lastName:"Kumar", age:24}
];

const user = users.map((x)=>{
    if(x.firstName==="Shubham"){
        x.firstName="a1";
        return x;
    }
    return x; 
})
console.log(user);
console.log("original users");
console.log(users)
//original users array is also being modified. This is because objects in JavaScript are reference types,
// so when we modify an object within an array, we are modifying the reference to that object within 
//the array, and not creating a new object.



//If you want to avoid modifying the original users array, you can create a new array with new objects 
//using the spread operator ... or the Object.assign() method like this:

const users2 = [
    {firstName:"Shubham", lastName:"Kumar", age:24},
    {firstName:"Padma", lastName:"Kumar", age:25},
    {firstName:"Chirag", lastName:"Kumar", age:26},
    {firstName:"Saket", lastName:"Kumar", age:24}
];

const user2= users2.map((x)=>{
    if(x.firstName==="Shubham"){
        return {...x, firstName:"a1"};
    }
    return x;
})
console.log(user2);
console.log(users2);