
const root = document.getElementById("root");

const appendOne = document.createElement('p');
appendOne.innerHTML = "I am AppendOne";

// append can be used to add elements in form of node objects or strings
//* and using append we can add multiple items
root.append(appendOne, "appending multiple items using append");

const appendChild = document.createElement('h1');
appendChild.innerHTML = "I am added using appendChild";

// using appendChild we can only add node objects, not string and also we can add only one item not multiple.
//*  appendChild will return the element added but append does not return anything.
const returnAppendChild = root.appendChild(appendChild);
console.log(returnAppendChild); // <h1>I am added using appendChild</h1>