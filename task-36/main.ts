// 36. T - Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.The function should print a sentence summarizing the size of the shirt and the message printed on it.Call the function.

// Function to make a T-shirt
function make_shirt(size: string, message: string): void {
  console.log(`The T-shirt size is ${size} and it says: "${message}"`);
}

// Call the function
make_shirt('Medium', 'I love TypeScript');
