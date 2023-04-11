console.log("hello");
setTimeout(function print(){
    console.log("world")
},1000);
console.log("waiting...");// here the global execution is executed and javascript starts executing the code
//line by line. when it encounters the settimeout it sends it to webapi and a callback is saved and timer of 
//5000 ms starts and javascript moves forward. when the timer 5000ms is expires, it is sent to callback
//queue and event loop constantly checks if call stack is empty or not. If call stack is empty event loop 
//immediately push the settimeout from callback queue to call stack and function inside the settimeout is executed.


//but the problem with setimetimeout is that it doesn't always get executed at right time.
// it means the function inside the above settimeout may take longer than 5000ms to be executed.
// How?
//suppose there is millions of line of code below line 5 and it takes 10sec to be executed, so during those
//10 seconds call stack will not be empty and event loop will not able to push the setimeout function from 
// callback to callstack
//we will replicated the same below. we will try to enagge he call stack for 10 sec

let start= new Date().getTime();
let end = start;

while(start-end <10000){
    start = new Date().getTime();

}

//so here the call stack will be occupied in the while loop for ten seconds
//only after ten seconds the funcyion inside settimeout will be exeuted
    