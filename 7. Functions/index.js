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

/*
// ES6 (ES2015): let, const => block scoped
// function start() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log(i); // create uncought problem
// }
// start();

// var => function scoped
// function start() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log(i); // execute currectly
// }
// start();

// var => function scoped

// variable declared using var keyword, attach the variable in window object.
var color = 'red';
console.log(window.color); // red

// but 
let clr = 'green';
console.log(window.clr); // undefined
*/


/* ======================================================================== */
// 7.10- The This Keyword

// method -> obj
// const Video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// }

// Video.stop = function() {
//     console.log(this);
// }

// Video.stop();

// function -> global (window, global)
// function Video(title) {
//     this.title = title;
//     console.log(this);
// }

// const v = new Video('b');

// const Video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function(tag) {
//             console.log(this.title, tag);
//         }, this);
//     }
// }

// Video.showTags();


/* ==================================================================== */
// 7.11- Changing This

// const Video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         const self = this;
//         this.tags.forEach(function(tag) {
//             console.log(self.title, tag);
//         });

//     }
// }

// Video.showTags();

// function playVideo(a, b) {
//     console.log(a, b);
//     console.log(this);
// }

// playVideo.call({name: 'Israfil'}, 1, 2);
// playVideo.apply({name: 'Rakib'}, [1, 2]);
// playVideo.bind({name: 'Hasan'})();

// 2nd solution
// const Video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function(tag) {
//             console.log(this.title, tag);
//         }.bind(this));

//     }
// }
// Video.showTags();

// 3rd solution
// const Video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(tag => {
//             console.log(this.title, tag);
//         });

//     }
// }
// Video.showTags();

/* =================================================================== */
// 7.12- Exercise 1- Sum of Arguments

function sum(nums) {
    if (Array.isArray(nums)) {
        return nums.reduce((total, num) => total + num, 0)
    }
    else {
        console.log(arguments);
    }
}

console.log(sum(1, 2, 3, 4));