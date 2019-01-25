// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  let charMap = {};
  let maxChar = '';
  let max = 0;

  for (x of str) {
    if (charMap[x]) {
      charMap[x]++;
    }
    else {
      charMap[x] = 1;
    }
  }

  for (var x in charMap) {
    if (max < charMap[x]) {
      maxChar = x;
      max = charMap[maxChar];
    }
  }

  return maxChar;

}

module.exports = maxChar;
