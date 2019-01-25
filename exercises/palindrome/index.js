// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   let a = 0;
//   let b = str.length - 1;

//   while (a <= b) {
//     if (str[a] !== str[b]) {
//       return false;
//     }

//     a++;
//     b--;
//   }
//   return true;
// }

function palindrome(str) {
  const newString = str.split('').reverse().join('');

  return str === newString;
}

module.exports = palindrome;
