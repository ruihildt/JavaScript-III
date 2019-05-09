/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
Outside of any function, the `this` keyword refers (or is "bound") to
the global scope,the giant soup/object. (and called in browsers,
the window object).

* 2. 
When called  by a function, `this` is bound to the closer hierarchical
object (or closest parent object).

* 3. 
When this is used in a constructor function, this is bound to to the newly created object.

* 4. 
It is possible to ecplicitely bind `this` by using .call or .apply and override the constructor

*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

const myName = "rui";

// Will be true, proving that the `this` is binded to the window object
console.log(this.myName === window.myName);


// Principle 2
// code example for Implicit Binding

//Nearest parent object is lambdaStudent so this is implicitely bound to it
const pilot = {
    firstname: 'rui',
    lastname: 'hildt',
    fullname() {
        console.log(`My name is ${this.firstname} ${this.lastname}.`);
    }
};

pilot.fullname();



// Principle 3
// code example for New Binding

function Plane(maker, model) {
    this.maker = maker;
    this.model = model;
    this.tank = 300;
}

Plane.prototype.fly = function (consumption = 10) {
    this.tank = this.tank - consumption;
    console.log(`We're flying on a ${this.maker} ${this.model} and after 70 miles, we have ${this.tank} of fuel left.`);
};

const airbus = new Plane('Airbus', 'A320');
const airbus2 = new Plane('Airbus', 'A330');

airbus.fly(30);

// Principle 4
// code example for Explicit Binding

const flyFaster = airbus.fly;
flyFaster.call(airbus2, 50);