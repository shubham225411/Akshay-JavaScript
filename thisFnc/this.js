
//window.name = "Mywindow";

const person= {
    name: "Shubham",
    printName: function(){
        console.log(this.name, this.name22);
    },
    printName2: ()=>{
        console.log(this);
    }

}

person.printName();// the this inside the printName is in the contect of person object
person.printName2(); // the this inside the printName2 is in the context of winidow object

