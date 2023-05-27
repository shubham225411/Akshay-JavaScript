person ={
    name: "Shubham",
    print: function(){
        console.log(this.name);
    },
    print2: ()=>{
        console.log(this.name);// * to the global object i.e window
    }
}

const obj ={
    name: "Shubham"
};

person.print.call();
//When call() is used without providing any argument, the this value will default to the global object
//window in a browser environment.  If you execute person.print.call() in a
// browser environment, it will log the global window object to the console. 
person.print();
person.print2();
person.print.call(obj)
person.print2.call(obj) // *** output is blank
// the this inside the arrow fnc doesn't bind it to the obj object and i still in the context of window

