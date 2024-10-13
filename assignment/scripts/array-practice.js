console.log('****** Array Practice *******');

// Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Creating an array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1. TODO: Make an array `favoriteFoods` with some favorite foods.
//    Be sure to console.log your array of foods to the console with
//    a message, similar to the example above.
let favoriteFoodsArray = ['Pizza','Brats','Burgers','BBQ'];
console.log('favoriteFoods are:', favoriteFoodArray)
// Array.length: A property that tells you how many items are in a given array.
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array?
let numberOfAnimals = animalArray.length // 👈 Using the .length property!
console.log('Number of animals:', numberOfAnimals);

// 2. TODO: Create a variable `numberOfFoods` and use the .length property
//    to assign it the number value of how many items are inside `favoriteFoods`.
//    Don't forget to console.log `numberOfFoods` to make sure your code worked!
let numberOfFoods = numberOfFoodsArray.length /3/
  console.log('numberOfFoods:, numberOfFoods);

// Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using its array index
let firstanimal = animalArray[0];
console.log('First animal is:', firstAnimal);

// 3.a. TODO: Create a variable `secondAnimal` and assign it the value
//      of the second item from the `animalArray`.
//      Be sure to console.log this new variable to make sure your code
//      worked as expected.

let secondanimal = animalArray[1];
console.log('Second animal is:', secondAnimal);
            
// 3.b. TODO: Create a variable `lastAnimal` and assign it the value of
//      the "last" item in `animalArray`, using its array index.
//      You'll need to console.log `animalArray` and `lastAnimal` to make
//      sure that your code does what you want. (Never trust your code until
//      you have proof that it works!)

let lastanimal = animalArray[2];
console.log('Last animal is:', lastAnimal);

// 3.c. (STRETCH) TODO: Refactor 3.b to use the `animalArray` variable's .length 
//       property, rather than the exact (hardcoded) index number of the last item.
let Annimal = AnimalArray.index[3];
console.log('last animal')


// Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end of an array using the Array.push method.
let animalToPush = 'penguin';
animalArray.push(animalToPush);
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Create a variable `dessert` and assign it a string value of
//      a dessert that you love.
//      Similar to above, add the `dessert` to the end of your `favoriteFoods`
//      array. (How can you be 100% certain this worked? 🤔)

let dessert = 'Ice Cream'
let dessertToPush= 'Ice Cream';
favoriteFoodArray.push(desesertToPush);
console.log('Added favoriteFood to end,' favoriteFoodArray);

// Example: Add to the beginning of an array using the Array.unshift method.
let animalToUnshift = 'walrus';
animalArray.unshift(animalToUnshift);
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.b. TODO: Create a variable `entree` and assign it a string value of
//      an entree that you enjoy.
//      Add the `entree` to the beginning of your `favoriteFoods` array.
let entree = 'Shrimp'
favoriteFoodArray.UnShift('Shrimp');
console.log('Added a favoriteFood to beginning:' ${Shrimp});

// Example: Remove the last animal by using the Array.pop method.
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// NOTE: Use the `colors` array for 4.c and 4.d.
let colors = ['orange', 'yellow', 'green', 'teal'];

// 4.c. TODO: The last value inside the `colors` array was added by mistake.
//      Remove it from the array and store it inside a new variable called
//      `lastColor`.
//      Don't forget! Use console.log to verify that the `colors`
//      array only contains three items now, AND to verify that `lastColor`
//      contains the value "teal".)

let removedcolor = colorsArray.pop();
console.log('The colors are now:', colorsArray);

// Example: Remove the first animal using the Array.shift method.
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d. TODO: Remove the first value from the `colors` array and store it
//      inside a new variable called `firstColor`.
//      To verify that your code worked, console.log `firstColor`!  

removedcolors = colorsArray.shift();
console.log('Removed the first color', removedColor);
console.log('The colors are now', colorsArray);







// STRETCH GOALS:

let gems = ['Topaz', 'Citrine', 'Diamond', 'Emerald', 'Iolite', 'Tanzanite'];

// 5.a (STRETCH) TODO: Replace the second gem with 'Tourmaline'.
//      Remember to console.log the updated array.


// 5.b (STRETCH) TODO: Sort your gems array in reverse alphabetical order.
//     Please console.log the sorted array.


// 5.c (STRETCH) TODO: Create a variable `gemString` and assign it a string value
//     that's made up of each value from the `gems` array, but separated by the
//     word "and".
//     It should look something like:
//       "Emerald and Diamond and Tourmaline and Topaz"
//     🔥 You'll need to research the .join Array method. 🔥
//     Don't forget to console.log `gemString`...


// 5.d (STRETCH) TODO: Make a new array `colorfulGems` that combines 
//     the gems array with the colors array.
//     It should look something like:
//       ['Tourmaline', 'Topaz', 'Tanzanite', 'Iolite', 'Emerald', 'Diamond', 'yellow', 'green']
//     Now, console.log the new array.




// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    favoriteFoods: typeof favoriteFoods !== 'undefined' ? favoriteFoods : undefined,
    numberOfFoods: typeof numberOfFoods !== 'undefined' ? numberOfFoods : undefined,
    secondAnimal: typeof secondAnimal !== 'undefined' ? secondAnimal : undefined,
    lastAnimal: typeof lastAnimal !== 'undefined' ? lastAnimal : undefined,
    dessert: typeof dessert !== 'undefined' ? dessert : undefined,
    entree: typeof entree !== 'undefined' ? entree : undefined,
    lastColor: typeof lastColor !== 'undefined' ? lastColor : undefined,
    firstColor: typeof firstColor !== 'undefined' ? firstColor : undefined,
    gems: typeof gems !== 'undefined' ? gems : undefined,
    gemString: typeof gemString !== 'undefined' ? gemString : undefined,
    colorfulGems: typeof colorfulGems !== 'undefined' ? colorfulGems : undefined,
    colors: typeof colors !== 'undefined' ? colors : undefined,
  };
} catch (e) {
  // Do nothing
}
