// map functiom is used where we need to transform the array and get a new array
const arr= [1,2,3,4,5]

// double = [2,4,6,8,10]
// triple = [3,6,9,12,15]

function double(x){
    return 2*x;
}
const doubleArr= arr.map(double); // passing a function inside map
console.log(doubleArr);

// anoter way to write map function
const doubleArr2 = arr.map((x)=> x*2);
console.log(doubleArr2);

const evenOrOdd = arr.map((x)=>{
    if(x%2===0){
        return "even";
    }
    return "odd";
})
console.log(evenOrOdd);

const users = [
    {firstName:"Shubham", lastName:"Kumar", age:24},
    {firstName:"Padma", lastName:"Kumar", age:25},
    {firstName:"Chirag", lastName:"Kumar", age:26},
    {firstName:"Saket", lastName:"Kumar", age:27}
];

//list of full names
const fullname= users.map((user)=>{
    return user.firstName +" "+ user.lastName;
})
console.log(fullname);
