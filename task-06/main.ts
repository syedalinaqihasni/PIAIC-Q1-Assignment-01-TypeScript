// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// Store a person's name with whitespace characters
let personNameWithWhitespace: string = '\t   John Doe\n';

// Print the name with whitespace
console.log(`Name with Whitespace: "${personNameWithWhitespace}"`);

// Strip whitespaces from the name
let strippedName: string = personNameWithWhitespace.trim();

// Print the name after stripping whitespaces
console.log(`Stripped Name: "${strippedName}"`);
