// create a simple class:
class Apple {
  constructor(){
    this.color = "red";
    this.form = "round";
  }
}

//create an instance of the class apple:
const grannySmith = new Apple;

//access the properties of the instance
grannySmith.color //"red"
grannySmith.form  //"round"


//create a new class identical to apple:
class AppleClone extends Apple {
  constructor(color) {  //needs to be the same as on super
    super(color);       //super is needed for extending!
  }
}
// note: the form is also imported! The keyword "super" imports everything:
const clone1 = new AppleClone;
clone1.coloe; //"red"
clone1.form;  //"round"

//Another example that works exactly the same:
class AppleClone2 extends Apple {
  constructor(whatCanIPutHere) {  // same as on super
    super(whatCanIPutHere);       //imports all properties
  }
}

//create an instance of AppleClone2:
const clone2 = new AppleClone2;
clone2.color //"red"
clone2.form //"round"


//create a new class with an additional property:
class AfricanApple extends Apple {
  constructor(color){
    super(color);
    this.size = "huge";
  }
}

//create an instance of AfricanApple:
const fatApp = new AfricanApple;
fatApp.color //"red"
fatApp.form  //"round"
fatApp.size //"huge"


//create a new class without one of the properties:
class StrangeApple extends Apple {
  constructor(color){
    super(color);
    this.form = undefined;
  }
}

//create an instance of StrangeApple:
const weirdo = new StrangeApple;
weirdo.color  //red
weirdo.form   //undefined


//create a new class that stores Apple's color as "appearance":
class AnotherApple extends Apple {
  constructor(whatCanIPutHere){
    super(whatCanIPutHere);
    this.appearance = this.color;
  }
}

//create an instance of AnotherApple:
const freshApple = new AnotherApple;
freshApple.form         //"red"
freshApple.color        //"round"
freshApple.appearance   //"red"


//create an instance that takes in new parameters:
class SalesApple extends Apple {
  constructor(price, data){ //first the param. entered manually!
    super(data);   //aas always: 'super' before 'this'
    this.price = price;
  }
}

//create an instance of SalesApple:
const storeApple = new SalesApple(5); //price parameter entered here '(5)'
storeApple.color; //"red"
storeApple.form;  //"round"
storeApple.price; // 5


//create a new (unrelated)class with default properties
class Vegetable {
  constructor(color = 'green', healthLevel = 'very high') {
    this.color = color;
    this.healthLevel = healthLevel;
  }
}

//create an instance of Vegetable:
const carrot = new Vegetable;
carrot.color;     //"green"
carrot.healLevel; //"very high"

//create an instance overwritting the defaults:
const carrot2 = new Vegetable ('orange', 'high');
carrot2.color;        //"orange"
carrot2.healthLevel;  //"high"

//create a new class with different default for color:
class RealCarrot extends Vegetable {
  constructor (color = 'orange', data) {
    super(data);
    this.color = color;
  }
}

//create an instance of this class:
const orangeCarrot = new RealCarrot;
orangeCarrot.color;       //"orange"
orangeCarrot.healthLevel; //"very high"

// create an instance with black color:
const blackCarrot = new RealCarrot("black");
blackCarrot.color;        //"black"
blackCarrot.healthLevel;  //"very high"
