// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//have a map that contains all letters
//loop through string thats passed in
//compare each char of string against map
//counting how many occurences of vowels there are

//how

function vowels(str) {
  let array = ['a','e','i','o','u'];
  let count = 0;
  let lowerCased = str.toLowerCase();

  for (let char of lowerCased) {
    if (array.indexOf(char) > -1) {
      count++;
    }
  }

  return count;
}

module.exports = vowels;
