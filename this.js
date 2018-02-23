//the keyword 'this' can refer to different things
// we have to decide between ES5 functions and arrow arrow_functions
// in general, 5 Cases apply:


//CASE 1: in default case, 'this' refers to the window object
var a = "hello";  //a is defined on globla level

console.log(a);         //"hello";
//the global level is the windwo object, so the following works:
console.log(window.a);   //"hello"
//in default case, 'this' refers to the window object:
console.log(this.a); //"hello"

//side- note: only "var" declares global variables, let doesn't:
let b = "hi";
console.log(b);  //"hi"
console.log(window.b); //undefined
console.log(this.b);  //undefined


//CASE2: for new objects, 'this' refers to the new object to be created:
class Car {
  constructor(color, seats, price){
    this.color = color;
    this.seats = seats;
    this.price = price;
  }
}

const golf = new Car("black", 5, 25000);
golf.color; //"black"


//CASE 3: for declared objects, 'this' refers to that object itself:
const person = {
  name: "Peter",
  lastName: "Griffin",
  fullName: function() {
    console.log(this.name + " " + this.lastName);
  }
};

person.fullName();    //"Peter Griffin"


//CASE 4: 'this' is set with 'call()', 'apply()' or 'bind()':
function add(c, d) {
  console.log(this.x + this.y + c + d);
}

var ten = {x:1, y:2};

add(3, 4);              //"NaN" because case 1 (default) applies!
add.call(ten, 3, 4);    //"10" beacuse 'this' is set to 'ten'
add.apply(ten, [3,4]);  //"10" because 'this' is set to 'ten'


//CASE 5: arrow functions DON'T modify 'this':
//sample class:
class IceCream {        //new class
  constructor(){
    this.scoops = 0;   //case 2 applies --> 'this' refers to IceCream Object (desert)
  }

  addScoop() {
    setTimeout(function() {       // regualar function call --> case 1
      this.scoops++;              //'this' refers to 'Window' object
      console.log('scoop added!');
    }, 0.5);
  };
}

const desert = new IceCream();
desert.addScoop();  //"scoop added"
desert.scoops;     //0 --> because in line 65, default case (case 1) applies

// arrow functions do NOT modify 'this':
class IceCream2 {
  constructor(){
    this.scoops = 0;   //case 2 applies --> 'this' refers to IceCream Object (desert)
  }
  //identical to code above
  addScoop2() {
    setTimeout( () => {   //arrow-function is used --> 'this' is NOT modified
      this.scoops++;      //this still refers to the IceCream object (desert)
      console.log('scoop added!');
  }, 0.5);
};
}

const desert2 = new IceCream2();
desert2.addScoop2();  //1 --> because 'this' stays looked to IceCream
