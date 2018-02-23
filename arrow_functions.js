// ES5 named function, no argument:
function logMe() {
  console.log("hello");
}
// call:
logMe();  //"hello"

// ES6: only function EXPRESSIONS can be turned into arrow functions!


// ES5 named function expression, no argument:
const logMe2 = function(){
  console.log("hello again");
}
//call:
logMe2(); //"hello again"

// ES6:
const logMe26 = () => console.log("hello again 6");
//call:
logMe26(); //"hello again 6"


// ES5 named function expression, 2 arguments:
const logMe3 = function(a, b){
  console.log("hello again " + a + " and " + b );
}
//call:
logMe3("Paul", "Mary"); //"hello again Paul and Mary"

//ES6:
const logMe36 = (a, b) => console.log(`hello again ${a} and ${b} 6`);
//call:
logMe36("Paul", "Mary"); //"hello again Paul and Mary 6"
