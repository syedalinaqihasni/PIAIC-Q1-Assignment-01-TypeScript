"use strict";
// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// Function to store information about a car in an Object
function car_info(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (let option of options) {
        let keys = Object.keys(option);
        for (let key of keys) {
            car[key] = option[key];
        }
    }
    return car;
}
// Call the function with required and optional information
let car_details = car_info('Toyota', 'Camry', { color: 'Blue' }, { feature: 'Navigation' });
// Print the Object to verify the information
console.log(car_details);
