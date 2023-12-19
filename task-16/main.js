"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// OLD SCRIPT TASK 15
let guestList = [
    'Albert Einstein',
    'Charles Darwin',
    'Leonardo da Vinci',
];
// Print an invitation to each person
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, I would be honored to invite you to dinner. Please join me at your convenience.`);
}
// Guest who can't make it
let notComing = guestList.pop();
console.log(`${notComing} can't make it to the dinner.`);
// Replace with a new person
let newPerson = 'Marie Curie';
guestList.push(newPerson);
// Print a second set of invitation messages
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, I would be honored to invite you to dinner. Please join me at your convenience.`);
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Inform about the bigger dinner table
console.log('Good news! We found a bigger dinner table.');
// Add new guests to the array
guestList.unshift('Isaac Newton'); // Add to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, 'Galileo Galilei'); // Add to the middle
guestList.push('Ada Lovelace'); // Add to the end using push
// Print a new set of invitation messages
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, I would be honored to invite you to dinner. Please join me at your convenience.`);
}
