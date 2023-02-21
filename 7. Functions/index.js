// 7.1- Function Declarations vs. Expressions
// Function declration
/*
function walk() {
    console.log('walk');
}
walk();

// Function Expression
const run = function() {
    console.log('Run');
}
let move = run;

run();
move();
*/
/* ================================================================= */

// 7.2- Hoisting
/*
walk();
function walk() {
    console.log('walk');
}

// Function Expression
const run = function() {
    console.log('Run');
}
// let move = run;

// run();
// move();
*/

/*========================================================== */

// 7.3- Arguments
/*
function sum() {
    let total = 0;
    for (let num of arguments)
        total += num;
    return total;
}

console.log(sum(5, 10, 15));
*/

/*================================================*/
// 7.4- The Rest Operator
/*
function totalPrice(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(totalPrice(0.1, 20, 30));
*/

/* ============================================================== */
// 7.5- Default Parameters
/*
function interest(principle, rate = 3.5, years = 5) {
    return principle * rate / 100 * years;
}

console.log(interest(10000));
*/

/* ================================================================ */
// 7.6- Getters and Setters
/*
const person = {
    firstName: 'Israfil',
    lastName: 'Hossen',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

console.log(person.fullName)

person.fullName = 'Aktarul Islam';

console.log(person.fullName)

console.log(person);
*/

/* ===================================================================== */
// 7.7- Try and Catch
/*
const person = {
  firstName: "Israfil",
  lastName: "Hossen",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a String.");

    const parts = value.split(" ");
    if (parts.length !== 2)
        throw new Error('Enter a first and last name.');

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = '';
} catch (e) {
    console.log(e);
//   alert(e);
}

console.log(person);
*/


/* ================================================================== */
// 7.8- Local vs. Global Scope
/*
const color = 'red'; // global scope

function start() {
    // local scope
    const color = 'blue'; // this is bad practice ...
    console.log(color);
}

start();
*/


/* ================================================================= */
// 7.9- Let vs Var



/* ======================================================================== */
// 7.10- The This Keyword