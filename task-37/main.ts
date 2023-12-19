// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// Function to make a T-shirt
function make_shirt(size: string, message: string): void {
  console.log(`The T-shirt size is ${size} and it says: "${message}"`);
}

// Call the function
make_shirt('Medium', 'I love TypeScript');
