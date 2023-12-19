"use strict";
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Test 1
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test 2
let number = 10;
console.log('Is number > 5? I predict True.');
console.log(number > 5);
// Test 3
let fruit = 'apple';
console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');
// Test 4
let age = 18;
console.log('Is age >= 18? I predict True.');
console.log(age >= 18);
// Test 5
let day = 'Monday';
console.log("Is day == 'Friday'? I predict False.");
console.log(day == 'Friday');
// Test 6
let weather = 'sunny';
console.log("Is weather == 'rainy'? I predict False.");
console.log(weather == 'rainy');
// Test 7
let isEven = 6 % 2 === 0;
console.log('Is 6 even? I predict True.');
console.log(isEven);
// Test 8
let isNegative = -5 < 0;
console.log('Is -5 negative? I predict True.');
console.log(isNegative);
// Test 9
let isUpperCase = 'HELLO' === 'hello'.toUpperCase();
console.log("Is 'hello' in uppercase? I predict True.");
console.log(isUpperCase);
// Test 10
let isTrue = true;
console.log('Is isTrue === true? I predict True.');
console.log(isTrue);
