const arr= [1,2,3,4,5];
const new_arr= arr.filter((x)=>{
    if(x===1){
        return x=2;
    }
    return x;
})

console.log(new_arr);//even this array is not modified bcz filter creates a shallow copy
// you're not just selectively changing a property of an existing array element that the shallow copy 
//shares with the source object; instead you're actually assigning a completely new value to that 
//array element, just in the shallow copy.
console.log(arr);//here the original array is not modified

const users = [
    {firstName:"Shubham", lastName:"Kumar", age:24},
    {firstName:"Padma", lastName:"Kumar", age:25},
    {firstName:"Chirag", lastName:"Kumar", age:26},
    {firstName:"Saket", lastName:"Kumar", age:24}
];

const user = users.filter((x)=>{
    if(x.firstName==="Shubham"){
        x.firstName="a1";
        return x;
    }
    //return x; 
})
console.log(user);
console.log("original users");
console.log(users)
//the array is not modified the objects in the array is getting modified bvz aobjects are refrenced based
//. This is because objects in JavaScript are reference types,
// so when we modify an object within an array, we are modifying the reference to that object within 
//the array, and not creating a new object.



//If you want to avoid modifying the original users array, you can create a new array with new objects 
//using the spread operator ... or the Object.assign() method like this: but it won't work as intended
//If you use filter() to modify the firstName property of an object in the user array, 
//it will only return a subset of the original user array that meets the condition. 
//The objects in the returned array will be the same as the ones in the original array and will not be 
//modified

//to modify the original array we should always use map bcz filter creates a shallow copy and return the 
//element that suits our condition .

const users2 = [
    {firstName:"Shubham", lastName:"Kumar", age:24},
    {firstName:"Padma", lastName:"Kumar", age:25},
    {firstName:"Chirag", lastName:"Kumar", age:26},
    {firstName:"Saket", lastName:"Kumar", age:24}
];

const user2= users2.filter((x)=>{
    if(x.firstName==="Shubham"){
        return {...x, firstName:"a1"};
    }
    //return x;
})
console.log(user2);
console.log(users2);