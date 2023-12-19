// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Store examples of favorite modes of transportation in an array
let transportationModes: string[] = [
  'motorcycle',
  'car',
  'bicycle',
  'bus',
  'scooter',
];

// Print statements about each item in the list
for (let i = 0; i < transportationModes.length; i++) {
  console.log(`I would like to own a ${transportationModes[i]}.`);
}
