// Question 1
/**
 * Takes two numbers as arguments and returns the largest of them.
 * Use the if-else construct available in Javascript.
 * Do some Googling to figure this out if you forget how conditionals work.
 * @param {number} x - first number to evaulate
 * @param {number} y - second number to evaulate
 * @returns {number} - the smaller of x and y
 */
function maxOfTwoNumbers(x, y) {
  if (x < y) {
    return y;
  } else if (x > y) {
    return x;
  }
}

// Question 2
/**
 * Takes three numbers as arguments and returns the largest of them.
 * @param {number} x - first number to evaulate
 * @param {number} y - second number to evaulate
 * @param {number} z - third number to evaulate
 * @returns {number} - the smaller of x, y, and z
 */
function maxOfThree(x, y, z) {
  if (!(arguments.length === 3)) {
    throw new Error('You must provide 3 arguments to this function');
  }

  if (x > y && x > z) {
    return x;
  }

  if (y > x && y > z) {
    return y;
  }

  if (z > x && z > y) {
    return z;
  }
}

// Question 3
/**
 * Takes a character (i.e. a string of length 1)
 * returns true if it is a vowel and false, otherwise.
 * BONUS: this can be done on one line!
 * @param {string} char - string of length 1
 * @returns {boolean} - is the character a vowel?
 */
function isCharacterAVowel(c) {
  return 'aeiou'.split().indexOf(c) !== -1;
}

// Question 4
function sumArray() {

}


// Question 4
function multiplyArray() {

}


// Question 5
var numberOfArguments = function(){

}



// Question 6
var reverseString = function (){

};


// Question 7
function findLongestWord () {

}


// Question 8
function filterLongWords () {

}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}

