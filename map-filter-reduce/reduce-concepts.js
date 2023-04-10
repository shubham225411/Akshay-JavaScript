const users = [
    {firstName:"Shubham", lastName:"Kumar", age:24},
    {firstName:"Padma", lastName:"Kumar", age:25},
    {firstName:"Chirag", lastName:"Kumar", age:26},
    {firstName:"Saket", lastName:"Kumar", age:24}
];

const user = users.reduce((acc,curr)=>{

    if(curr.firstName==="Shubham"){
        curr.firstName="a1"
        acc.push(curr);
    }
    return acc;
},[])

console.log(user);
console.log(users);// the array is not modified the objects in the array is getting modified bvz aobjects are refrenced based

const user2 = users.reduce((acc,curr)=>{

    if(curr.firstName==="a1"){
        acc.push({...curr,firstName:"b11"});
    }
    return acc;
},[])

console.log(user2);
console.log(users);//here the objects in the array not getting modified bcz we are spread operator and creating a new array with
                    //new objects