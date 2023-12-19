// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Function to show magicians
function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

// Array of magician's names
let magicians: string[] = ['Merlin', 'David Copperfield', 'Houdini'];

// Call the function to show magicians
show_magicians(magicians);
