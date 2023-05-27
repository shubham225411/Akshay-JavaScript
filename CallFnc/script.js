const obj = {
    animal: "cats",
    sleepDuration: "12 and 16 hours",
    total: 23,
};


function greet() {
    console.log(
        this.animal,
        "typically sleep between",
        this.sleepDuration,
        this.total
    );
}

greet.call(obj); // cats typically sleep between 12 and 16 hours 23

// In the code you provided, you have defined an object `obj` with a property animal, sleepDurationa and total.
//Additionally, there is a function `greet` .
// The `call()` method is used to invoke the function `greet` and explicitly set the `this` value to the `obj` object.
// By using `greet.call(obj)`, you are executing the function `greet` in the context of the `obj` object.
// Inside the `greet` function, `this` refers to the object on which the function is invoked, which in this case is the `obj` object.
// Therefore, when you execute `greet.call(obj)`, it will log the `obj` object to the console.
// its more like we are typing obj.animal, "typically sleep between", obj.sleepDuration and so on
