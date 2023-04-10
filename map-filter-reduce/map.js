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

console.log("--------------------------------------------")
const object = {
    a: 1,
    b: 2,
    c: 3,
  };
  
  const array = Object.entries(object);
  console.log(array); // [['a', 1], ['b', 2], ['c', 3]]
  
  //map takes three arguments 1) the value of the current element 2) the index o current elelemnt 3) the array itself
  const newArray = array.map((value, index, array)=>{
    //console.log(array[index][1])
     array[index][1]= array[index][1]*2;
     return value;
  })
  console.log(newArray); // [['a', 2], ['b', 4], ['c', 6]]

