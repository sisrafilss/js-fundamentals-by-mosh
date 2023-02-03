
// 2- Factory Functions
// factory function to create object
/*
function createCircle(radius) {
    const circle =  {
        radius: radius,
        draw: function() {
            console.log('draw');
        }
    }
    return circle;
}
const circle = createCircle(4);
*/
// console.log(circle);
// circle.draw();


// the more simplified version of the above function is -
/*
function createCircleSimple(radius) {
    return {
        radius, // if the name of the key and value are same, no need to write both
        draw() {
            console.log('draw');
        }
    }
}
const circle2 = createCircleSimple(4);
// console.log(circle2);
// circle2.draw();
*/
/*--------------------------------------------------*/

// 3- Constructor Functions
/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const myCicle = new Circle(4);
myCircle.draw();
*/
/* --------------------------------------------------------- */


// 4- Dynamic Nature of Objects
/*
const circle = {
    radius: 5,
}

// adding a property or method dynamically
circle.draw = function() {
    console.log('draw');
}

circle.color = 'yellow';

// delete a property or method using delete keyword
delete circle.radius;

// console.log(circle)
*/


/*----------------------------------------------------------*/
// 5- Constructor Property
/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

function createCircleSimple(radius) {
    return {
        radius, // if the name of the key and value are same, no need to write both
        draw() {
            console.log('draw');
        }
    }
}

// const myCicle = new Circle(4);
// console.log(myCicle.constructor) // will print the Circle function because it is used to create the myCircle object.

const circle2 = createCircleSimple(4);
// but what happened when we print circle2.constructor
// console.log(circle2.constructor) // We will see the function named 'Object()' in the console instead of our 'createCircleSimple()'. Because everything is an object in JavaScript. When we use an object literal {} to declare an object, this will internally call the function 'Object()' constructor function and return the object to us. Similarly, when we create an array using an array literal [], it calls its constructor 'Array()', for a string literal '', it calls its constructor 'String()', and so on for Boolean().
*/
/* ---------------------------------------------------- */


// 6- Functions are Objects
// Explain that functions are object in javascript.

// 8- Enumerating Properties of an Object
// We can enumerate an objet using for-in loop, Object

// 9- Cloning an Object
// We can clone an object to another using for-in loop, Object.assign(destination_object, source_object), or using spread operator (...)

// 10- Garbage Collection


// 11- Math
// Discussed a few methods of Math Object like Math.floor(), Math.random(), Math.max(), Math.min(), etc.


// 12- String
// Discussed a few important properties and methods of String Object.

// 13- Template Literals
// Discussed Template literals - back tik to wrap string - i.e, `string`.

// 14- Date
// Discussed the default Date object and some methods of it.


// 15- Exercise 1- Address Object
/*
const address = {
    street: 'Babu Khan Road',
    city: 'Khulna',
    zipCode: 9000,
}

function showAddress(address) {
    for (let key in address) {
        console.log(key, ':', address[key]);
    }
}

showAddress(address);
*/



/* =================================================== */
// 16- Exercise- Factory and Constructor Function

/*
// Factory Function
function createAddress(road, city, zipCode) {
    return {
        road,
        city,
        zipCode
    }
}
const address1 = createAddress('Khan Jahan Ali Road', 'Khulna', 9000);
console.log(address1);

// Constructor Function
function CreateAddress(road, city, zipCode) {
    this.road = road,
    this.city = city,
    this.zipCode = zipCode;
}

const address2 = new CreateAddress('South Centrel Road', 'Khulna', 9000);
console.log(address2);
*/


/* ============================================================= */

// 17- Exercise 3- Object Equality
/*
function CreateAddress(road, city, zipCode) {
    this.road = road,
    this.city = city,
    this.zipCode = zipCode;
}

const address1 = new CreateAddress('South Centrel Road', 'Khulna', 9000);
const address2 = new CreateAddress('South Centrel Road', 'Khulna', 9000);
const address3 = address1;

console.log(areEqual(address1, address2))
console.log(areSame(address1, address3));

// Declared functions
function areEqual(address1, address2) {
    return address1.road === address2.road && 
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
}

function areSame(address1, address2) {
    return address1 === address2;
}
*/


/* ============================================================= */
// 18- Exercise 4- Blog Post Object
/*
const blogPost = {
    title: 'This is blog Title',
    body: 'This is Blog Body',
    author: 'John Doe',
    views: 2892,
    comments: [
        {
            author: 'John Smith',
            body: 'John\'s comment body'
        },
        {
            author: 'Mike Smith',
            body: 'Mike\'s comment body'
        }
    ],
    isLive: true
}
console.log(blogPost);
*/




/* ============================================================ */
// 19- Exercise 5- Constructor Functions
/*
function CreatePost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0,
    this.comments = [];
    this.isLive = false;
}

const post = new CreatePost('Post Title', 'Post Body', 'Israil Hossen');
console.log(post);
*/


/* ===================================================================== */
// 20- Exercise 6- Price Range Objects
/*
const priceRanges = [
    {
        label: '$',
        tooltip: 'Inexpensive',
        minPerPerson: 0,
        maxPerPerson: 10
    },
    {
        label: '$$',
        tooltip: 'Moderate',
        minPerPerson: 11,
        maxPerPerson: 20
    },
    {
        label: '$$$',
        tooltip: 'Expensive',
        minPerPerson: 21,
        maxPerPerson: 50
    }
]

console.log(priceRanges);
*/