const users = [
    {firstName:"Shubham", lastName:"Kumar", age:24},
    {firstName:"Padma", lastName:"Kumar", age:25},
    {firstName:"Chirag", lastName:"Kumar", age:26},
    {firstName:"Saket", lastName:"Kumar", age:24}
];
//first name of all the users whose age<26

const listOffirstName = users.filter((user)=>{
    if(user.age<26) return user.firstName;
}).map((user)=>{
    return user.firstName;
})
console.log(listOffirstName);

const usingFilter = users.reduce((acc, curr)=>{
        if(curr.age<26){
             acc.push(curr.firstName)
        }
        return acc;
},[])//accumulator can be of any data type here i have used a list wherein the users is an object

console.log(usingFilter);


const arr= [1,2,3,4,5,6]// return index and type of element like {0:"odd", {1:"even"}}

const new_arr= arr.reduce((acc,  curr)=>{
    const map = new Map();
    const index = 0;
    if(curr%2===0) map.set(index,"even");
    else map.set(index,"odd");
    acc.push(map)
    return acc;
    
},[])

new_arr.forEach((idx, val)=>{
    console.log(val,idx);
})


const users2 = [
    {firstName:"Shubham", lastName:"Kumar", age:24},
    {firstName:"Padma", lastName:"Kumar", age:25},
    {firstName:"Chirag", lastName:"Kumar", age:26},
    {firstName:"Saket", lastName:"Kumar", age:24}
];

const a= users2.filter((x)=>{
    if(x.firstName=="Shubham"){
        x.firstName=="na";
    } 
    return x;
})

console.log("printing a ",a);
console.log("printing users2", users2);