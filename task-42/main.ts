// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Function to make magicians great
function make_great(magicians: string[]): string[] {
  let great_magicians: string[] = [];

  for (let magician of magicians) {
    great_magicians.push(`${magician} the Great`);
  }

  return great_magicians;
}

// Call the function to modify the array
let great_magicians = make_great(magicians.slice());

// Call the function to show modified magicians
show_magicians(great_magicians);
