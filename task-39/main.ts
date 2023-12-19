// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.

// Function to return a formatted city-country string
function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

// Call the function with different city-country pairs
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Tokyo', 'Japan'));
console.log(city_country('Sydney', 'Australia'));
