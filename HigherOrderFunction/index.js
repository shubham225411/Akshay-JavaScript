const radius = [1,2,3,4,5];
// we have to find the area, circumference and diamter of all the radius
// in the below code there is too much duplicacy, again and gain wahi for loop teeno function mai
//isko ab hum krenge functional programming se, jisme hum function ke andar function pass krenge
//wo milega optimized.js file mai
function calculateArea(radius){
    const output =[];
    for(let i=0; i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}

function calculateCircumference(radius){
    const output =[];
    for(let i=0; i<radius.length;i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
}

function calculateDiameter(radius){
    const output =[];
    for(let i=0; i<radius.length;i++){
        output.push(2*radius[i]);
    }
    return output;
}

console.log(calculateDiameter(radius));
console.log(calculateArea(radius));
console.log(calculateCircumference(radius));