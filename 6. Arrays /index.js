// 1. 1- Introduction

// 2. 2- Adding Elements

/* ================================================ */
// 3. 3- Finding Elements (Primitives)
/*
const numbers = [1, 2, 3, 4, 5, 1, 6];

console.log(numbers.indexOf(1)); // 0

console.log(numbers.lastIndexOf(1)); // 5

console.log(numbers.includes(4)); // true
console.log(numbers.includes(7)); // false
*/

/* ====================================================== */
// 4. 4- Finding Elements (Reference Types)
/*
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// Returns the matched object
const course = courses.find(function(course) {
    return course.name === 'b';
})

// returns the index of matched object.
const course2 = courses.findIndex(function(course) {
    return course.id === 2;
})

console.log(course);
console.log(course2);
*/

/* ========================================================== */
// 5. 5- Arrow Functions
/*
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const course = courses.find((course) => course.name === "a");
console.log(course);
*/

/* ================================================================ */
// 6. 6- Removing Elements

/*
const numbers = [1, 2, 3, 4, 5];

// beginning
// const last = numbers.shift();
// console.log(numbers);
// console.log(last);

// middle
// const middle = numbers.splice(2, 1);
// console.log(numbers);
// console.log(middle);

// end
// const end = numbers.pop();
// console.log(numbers);
// console.log(end);
*/

/* ============================================================== */
// 7. 7- Emptying an Array

/*
let numbers = [1, 2, 3, 4];

// Solution - 1
// numbers = [];
// console.log(numbers)

// Solution - 2
// numbers.length = 0;
// console.log(numbers);

// Solution - 3
// numbers.splice(0, numbers.length);
// console.log(numbers);

// Solution - 4
// while (numbers.length > 0)
//     numbers.pop();
// console.log(numbers);
*/

/* =============================================================== */
// 8. 8- Combining and Slicing Arrays
/*
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

console.log(combined);

const slice = combined.slice(2);

console.log(slice);
*/

/* ============================================================= */
// 9. 9- The Spread Operator
/*
const first = [1, 2, 3];
const second = [4, 5, 6];

const copy = [...first, 'a', ...second, 'b'];
console.log(copy);
*/

/* =============================================================== */
// 10. 10- Iterating an Array
/*
const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) 
    console.log(number);

numbers.forEach((number, index) => console.log(index, number));
*/

/* ============================================================== */
// 11. 11- Joining Arrays
/*
const numbers = [1, 2, 3, 4, 5];
const joined = numbers.join(",");
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts)

const combined = parts.join('-');
console.log(combined);
*/

/* ========================================================================= */
// 12. 12- Sorting Arrays
/*
const numbers = [2, 1, 4, 3];
numbers.sort();
numbers.reverse()
console.log(numbers)

const courses = [
  { id: 1, name: "Nodejs" },
  { id: 2, name: "javaScript" },
];

courses.sort(function (a, b) {

  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses);
*/

/* ============================================================ */
// 13. 13- Testing the Elements of an Array
/*
const numbers = [2, 1, 0, 3];
const numbers2 = [-1, -2, 1, -5];

const isAllPositive = numbers.every(value => value >= 0);
console.log(isAllPositive);

const isAtleastOnePositive = numbers2.some(value => value >= 0);
console.log(isAtleastOnePositive);
*/

/* =============================================================== */
// 14. 14- Filtering an Array
/*
const numbers = [1, 2, 3, 4, 5, 8 , 8, 98, 8, 22, 99, 77, 55, 24];

const filtered = numbers.filter(n => n > 10);

console.log(filtered);
*/

/* ================================================================== */
// 15. 15- Mapping an Array

/*
const numbers = [1, 2, 3, 4, 5, 8 , 8, 98, 8, 22, 99, 77, 55, 24];

// Method Chaining
const items = numbers
  .filter(n => n >= 10)
  .map(n => ({value: n}))
  .filter(obj => obj.value > 50)
  .map(obj => obj.value);

  console.log(items)
*/

/* ================================================================ */
// 16. 16- Reducing an Array
/*
const numbers = [2, 1, 7, 3];

const sum = numbers.reduce(
  (accumulator, currentVal) => accumulator + currentVal
);

console.log(sum);
*/

/* =================================================================== */
// 17. 17- Exercise 1- Array from Range
/*
const numbers = arrayFromRange(-10, -4);

console.log(numbers);

function arrayFromRange(min, max) {
  const array = [];
  for (let i = min; i <= max; i++)
    array.push(i);

  return array
}
*/

/* =================================================================== */
// 18. 18- Exercise 2- Includes
/*
const numbers = [1, 2, 3, 5, 6];
console.log(includes(numbers, 4));

function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;

  return false;
}
*/

/* =================================================================== */
// 19. 19- Exercise 3- Except
/*
const numbers = [1, 2, 3, 4, 5, 6];

const output = except(numbers, [3, 4]);

console.log(output);

function except(array, excluded) {

  let output = [];
  for (element of array)
    if (!excluded.includes(element)) output.push(element);

  return output;
}
*/

/* =================================================================== */
// 20. 20- Exercise 4- Moving an Element

/*
const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 3);

console.log(output);

function move(array, index, offset) {
  // My Solution
  const output = [...array];
  if (offset < 0) {
    const leftMovable = index + 1;
    if (offset * -1 >= leftMovable) {
      console.error("Invalid Offset");
      return;
    }
  }

  if (index + offset >= array.length ) {
    console.error("Invalid Offset");
    return;
  }

  let tmp = output[index + offset];
  output[index + offset] = output[index];
  output[index] = tmp;

  return output;

 
  // Mosh's Solution
  // const output = [...array];

  // const position = index + offset;
  // if (position >= array.length || position < 0) {
  //   console.error("Invalid Offset");
  //   return;
  // }

  // const element = output.splice(index, 1)[0];
  // output.splice(position, 0, element);
  
}
*/

/* =================================================================== */
// 21- Exercise 5- Count Occurrences
/*
const numbers = [1, 2, 3, 4, 5, 3];

const count = countOccurrences(numbers, 3);

console.log(count);

function countOccurrences(array, searchElement) {
  // Simple solution
  // let count = 0;
  // for (let element of array)
  //   if (element === searchElement)
  //     count++;
  // return count;

  // Using Reduce
  return array.reduce(
    (count, element) => {
      if (element === searchElement)
        count++;
      return count;
    }, 0
  )
}
*/

/* =================================================================== */
// 22. 22- Exercise 6- Get Max
/*
const numbers = [1, 2, 3, 4, 5];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;
  return array.reduce((a, b) => (a > b) ? a : b);
}
*/
/* =================================================================== */
// 23. 23- Exercise 7- Movies
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

const titles = movies
  .filter((movie) => movie.year === 2018 && movie.rating > 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((movie) => movie.title)

console.log(titles);
