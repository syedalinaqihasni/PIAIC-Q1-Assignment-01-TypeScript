"use strict";
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive.If 'John' has been used, 'JOHN' should not be accepted.
// Make a list of current users and new users
let current_users = ['admin', 'Eric', 'Alice', 'Bob', 'John'];
let new_users = ['Bob', 'Jane', 'Alice', 'Mike', 'Sara'];
// Loop through new users to check availability
for (let i = 0; i < new_users.length; i++) {
    // Case-insensitive comparison
    if (current_users.includes(new_users[i].toLowerCase())) {
        console.log(`Sorry, ${new_users[i]}, you will need to enter a new username.`);
    }
    else {
        console.log(`Username ${new_users[i]} is available.`);
    }
}
