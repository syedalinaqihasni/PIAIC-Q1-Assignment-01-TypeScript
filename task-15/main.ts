// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.

// Store a list of people you'd like to invite to dinner
let guestList: string[] = [
  'Albert Einstein',
  'Charles Robert Darwin',
  'Leonardo da Vinci',
];

// Print an invitation to each person
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Dear ${guestList[i]}, I would be honored to invite you to dinner. Please join me at your convenience.`
  );
}

// Guest who can't make it
let notComing: string = guestList.pop();
console.log(`${notComing} can't make it to the dinner.`);

// Replace with a new person
let newPerson: string = 'Marie Curie';
guestList.push(newPerson);

// Print a second set of invitation messages
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Dear ${guestList[i]}, I would be honored to invite you to dinner. Please join me at your convenience.`
  );
}
