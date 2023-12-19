"use strict";
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
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
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Inform that only two people can be invited
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");
// Remove guests one at a time until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
    }
}
// Print a message to each of the two remaining guests
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you're still invited to dinner.`);
}
// Remove the last two names from the list
guestList.splice(0, guestList.length);
// Print the empty list
console.log('Guest list:', guestList);
