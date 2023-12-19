// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Store the names of friends in an array
let names: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];

// Print a personalized message to each person
for (let i = 0; i < names.length; i++) {
  console.log(`Hello ${names[i]}, I hope you're having a great day!`);
}
