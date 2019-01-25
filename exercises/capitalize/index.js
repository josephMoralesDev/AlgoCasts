// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// split by spaces into array
// capitalize each in the array
// join array with a space

// function capitalize(str) {
//   let newString = str.split(' ');

//   for (var word in newString) {
//     newString[word] = newString[word][0].toUpperCase() + newString[word].substr(1);
//   }

//   return newString.join(' ');
// }

function capitalize(str) {
  let newString = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      newString += str[i].toUpperCase();
    } else {
      newString = newString + str[i];
    }
  }

  return newString;
}

module.exports = capitalize;
