// the main 

//console.log(this);// it will show the window object
Window.name = "Mywindow";

const obj2 = {
    a: console.log(this),
    x: ()=>{
        console.log(this);
        console.log(this.name)
    },
    y: function(){
        console.log(this);
    }
        
}

// obj2.fn();// it will show the obj object
// obj2.arrFn();// it will refers to window object



//obj2.x.fn();
obj2.a;// printhig the this of obj
obj2.x();// since it is an arrow fnc, it will take the this of obj
obj2.y();// here iot depends how the function is invoked obj2.y(). it will refer to obj object

  