// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//can do recursively

// have a counter that starts at 1
// if n !== counter
// in order to know how many spaces you can print per line
// n - counter;

// if n === counter
// log final row
// return;


function steps(n, counter = 1) {

  if (n !== counter) {
    let numberSpaces = n - counter;
    let hashString = new Array(counter).fill('#').join('');
    let spaceString = new Array(numberSpaces).fill(' ').join('');
    console.log(hashString + spaceString);
    steps(n, counter + 1);
  } else {
    let hashString = new Array(n).fill('#').join('');
    console.log(hashString);
    return;
  }

}

module.exports = steps;
