"use strict";
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Store a person's name in a variable
let personName = 'John Doe';
// Convert the name to lowercase
let lowercaseName = personName.toLowerCase();
// Convert the name to uppercase
let uppercaseName = personName.toUpperCase();
// Convert the name to titlecase
let titlecaseName = personName
    .toLowerCase()
    .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
// Print the names
console.log(`Original Name: ${personName}`);
console.log(`Lowercase Name: ${lowercaseName}`);
console.log(`Uppercase Name: ${uppercaseName}`);
console.log(`Titlecase Name: ${titlecaseName}`);
