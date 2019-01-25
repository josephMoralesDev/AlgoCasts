// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'

//for loop that adds 2 to counter that starts out at 1
//until it reaches index that passed in
// this gives how many spaces for bottom row

//to calculate spaces on each side for each row you will subtract number of
//hashes from number of spaces in order to calculate our value

//as calculating each row spaces on each side
//create three arrays... log = Array.length(nS,' ') + Array.length(nH,'#') + Array.length(nS, ' ')

function pyramid(n) {
  let counter = 1;

  for (let i = 1; i < n; i++) {
    counter = counter + 2;
  }

  let hashes = 1;

  for (let i = 1; i <= n; i++) {
    let numberOfSpaces = (counter - hashes) / 2;
    let logLeft = new Array(numberOfSpaces)
    logLeft.fill(' ');
    let logRight = new Array(numberOfSpaces)
    logRight.fill(' ');
    let logMiddle = new Array(hashes);
    logMiddle.fill('#');

    console.log(logLeft.concat(logMiddle, logRight).join(''));

    hashes = hashes + 2; //calculates next amount of hashes
  }
  //   pyramid(2)
  //       ' # '
  //       '###'
  // 3 - counter
  // 1 - numspace
  // 3 - hashes
}

module.exports = pyramid;
