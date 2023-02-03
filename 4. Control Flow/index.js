
// 10- Max of Two Numbers
function max(a, b) {
    if (a > b) return a;
    return b;
}
// console.log(max(10, 15));


// 11- Exercise- Landscape or Portrait
function isLandscape(width, height) {
    return (width > height);
}
// console.log(isLandscape(800, 600))


// 12- Exercise- FizzBuzz
function fizzBuzz(input) {
    if (typeof input !== 'number')
        return 'Not a Number';
    if (input % 3 === 0 && input % 5 === 0)
        return 'FizzBuzz';
    if (input % 3 === 0)
        return 'Fizz';
    if (input % 5 === 0)
        return 'Buzz';
    return input;
}
// output = fizzBuzz(30);
// console.log(output);


// 13- Exercise- Demerit Points
function checkSpeed(speed) {
    const speedLimit = 70;
    const pointPerKm = 5;
    if (speed < speedLimit + pointPerKm) {
        console.log('Ok');
        return;
    }

    let point = Math.floor((speed - speedLimit) / pointPerKm);
    if (point > 12)
        console.log('License suspended');
    else
        console.log('Point:', point);
}
// checkSpeed(130);


// 14- Exercise- Even and Odd Numbers
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 == 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}
// showNumbers(10);


// 15- Exercise- Count Truthy
function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value) count++;
    return count;
}
// const array = ['', undefined, null, NaN, false, true, 0, 1, 2, 3];
// console.log(countTruthy(array));

// 16- Exercise- String Properties
function showProperties(obj) {
    for (let key in obj) 
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};
// showProperties(movie);


// 17- Exercise- Sum of Multiples 3 and 5
function sum(limit) {
    let sum = 0;
    for (let i = 1; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0) sum += i;

    return sum;
}
// console.log(sum(10));



// 18- Exercise - Grade
function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    
    return sum / array.length;
}
function calculateGrade(marks) {
    const average = calculateAverage(marks);

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';

    return 'A';
}
// const array = [100, 90, 80];
// console.log(calculateGrade(array));



// 19- Exercise - Stars
function showStars(rows) {
    for (let i = 0; i < rows; i++) {
        let pattern = '';
        for (let j = 0; j <= i; j++)
            pattern += '*';
        console.log(pattern);
    }
}
// showStars(5);


// 20- Exercise - Prime Numbers
function isPrime(number) {
    for (let i = 2; i < number; i++)
        if (number % i == 0) return false;

    return true;
}
function showPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) console.log(i);
    }
}
// showPrimes(20);