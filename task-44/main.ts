// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// Function to summarize a sandwich order
function order_sandwich(...items: string[]): void {
  console.log('Sandwich Summary:');
  for (let item of items) {
    console.log(`- ${item}`);
  }
  console.log('Enjoy your sandwich!');
}

// Call the function with different numbers of arguments
order_sandwich('Ham', 'Cheese', 'Lettuce');
order_sandwich('Turkey', 'Tomato');
order_sandwich('Peanut Butter', 'Jelly', 'Bread');
