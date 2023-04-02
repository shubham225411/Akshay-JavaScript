// The Promise.all() static method takes an iterable of promises as input and returns a single Promise. 
// This returned promise fulfills when all of the input's promises fulfill (including when an empty 
// iterable is passed), with an array of the fulfillment values. It rejects when any of the 
// input's promises rejects, with this first rejection reason.
const p1= Promise.resolve(12);
let p2;
const p3 = new Promise((resolve, reject) => {
    resolve('unknown error');
})

Promise.all([p1,p2,p3]).then((values)=>{
    console.log(values);
})
.catch((err)=>{
    console.log(err);
})

//output- [12, undefined, 'unknown error']

//-----------------------------------------------------------
const p4= Promise.all([1,2,3]);
const p5 = Promise.all([4,5,Promise.resolve(6)])
const p6 = Promise.all([7,8,Promise.reject("aaj mood nhi hai")]);

Promise.all([p4,p5,p6]).then((values)=>{
    console.log(values);
})
.catch((err)=>{
    console.log(err)
})
//output- aaj mood nhi hai

//----------------------------------------------------------------

//passing an array of resolved promises

const p7 = [Promise.resolve(9), Promise.resolve(10)];

const result = Promise.all(p7);
result.then((values)=>{
    console.log(values);
})

//------------------------------------------------------------------

//promise.all resolves if and only if iterable passed is empty

const p8 = Promise.all([]); // Will be immediately resolved
const p9 = Promise.all([1337, "hi"]); // Non-promise values are ignored, but the evaluation is done asynchronously
console.log("p8",p8);
console.log("p9",p9);
setTimeout(() => {
  console.log("the queue is now empty");
  console.log("p9",p9);
});

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }


//-------------------------------------------------------------------
// Promise.all is rejected if any of the elements are rejected. For example, if you pass in four promises that resolve after a 
// timeout and one promise that rejects immediately, then Promise.all will reject immediately.

const p10 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 1000);
  });
  const p11 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 2000);
  });
  const p12 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("three"), 3000);
  });
  const p13 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("four"), 4000);
  });
  const p14 = new Promise((resolve, reject) => {
    reject(new Error("reject"));
  });
  
  // Using .catch:
  Promise.all([p10, p11, p12, p13, p14])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.log(error.message);
    });
  
  // Logs:
  // "reject"

  // the fail fast behaviour can be contolled by suitable error handling method
  const p15 = new Promise((resolve, reject) => {
    resolve("p1_delayed_resolution");
  });
  
  const p16 = new Promise((resolve, reject) => {
    reject(new Error("p2_immediate_rejection"));
  });
  
  Promise.all([p16.catch((error) => error.message), p15.catch((error) => error)]).then(
    (values) => {
        console.log(values[1]);
        console.log(values[0]); 
    },
  )

  // other promise methds are promise.race, promise.any
  
  
  