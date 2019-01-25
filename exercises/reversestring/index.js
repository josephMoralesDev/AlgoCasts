// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   const stringArr = str.split('');
//   return stringArr.reduce((prevVal, currentValue) => {
//     return currentValue + prevVal;
//   }, '');
// }

function reverse(str) {
  if (str === "") {
    return "";
  }

  return reverse(str.substr(1)) + str[0];
}

module.exports = reverse;
