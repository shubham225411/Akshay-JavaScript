const radius =[1,2,3,4,5];

const calculateArea = function(radius){
    return Math.PI*radius*radius;
}

const calculateDiameter= function(radius){
    return 2*radius;
}


const calculateCircumference = function(radius){
    return 2*Math.PI*radius;
}


//idhar logic ek function represent karta hai jis function mai apna logic dal rakha hai, hume jo calculate karwana hai uska
//agar humein area chahiye toh calculateArea pass kr denge logic mai and isi tarah
const calculate = function(arrOfRadius, logic){
    const output =[];
    for (let i = 0; i < arrOfRadius.length; i++) {
        output.push(logic(arrOfRadius[i]));
    }

    return output;
}

console.log(calculate(radius,calculateDiameter));
console.log(calculate(radius,calculateCircumference));
console.log(calculate(radius,calculateArea));