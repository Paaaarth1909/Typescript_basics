/* Declare an array ages containing numbers 25, 30, and 35. Map over the array and double each age. Print the modified array. */  
let ages: number[] = [25, 30, 35];

let doubledAges = ages.map(age => age * 2);

console.log(doubledAges);
