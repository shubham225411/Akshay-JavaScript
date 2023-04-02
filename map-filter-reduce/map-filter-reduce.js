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
