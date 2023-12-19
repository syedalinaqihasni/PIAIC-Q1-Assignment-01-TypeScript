"use strict";
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// Store a list of people you'd like to invite to dinner
let guestList = [
    'Albert Einstein',
    'Issac Nuton',
    'Leonardo da Vinci',
];
// Print an invitation to each person
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, I would be honored to invite you to dinner. Please join me at your convenience.`);
}
