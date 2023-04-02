// filter fuction is basically used to filter out the values
// suppose filter out all the odd/even values from the array

const arr =[1,2,3,4,5,6]

const filteredArr= arr.filter((x)=>{
    if(x%2===0){
        return x;
    }
})
console.log(filteredArr);

