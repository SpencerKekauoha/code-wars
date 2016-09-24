//FREE CODE CAMP TOY PROBLEMS

function factorialize(num) {
	var fact = 1;
  for(var i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

factorialize(5);

// factorialize(5) should equal 1 * 2 * 3 * 4 * 5 = 120;
// loop as i < 5.
// multiply i times the next i until loops stops.


/////////////////////////

// NEXT PROBLEM

///////////////////////

// Return true if the given string is a palindrome. Otherwise, return false.
//
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function palindrome(str) {
  var format = str.toLowerCase().replace(/[\W_]+/g, '');
  if(format === format.split('').reverse().join('')) {
  	return true;
  } else {
  	return false;
  }
}


// palindrome("_eye")
// palindrome("eye");
// palindrome("race car");
// palindrome("race Car");

// palidrome is the same word reversed
// if str === str.reverse(); return true

// \W is the negation of shorthand \w for [A-Za-z0-9_] word characters (including the underscore)

/////////////////////////

// NEXT PROBLEM

///////////////////////

function findLongestWord(str) {
  var strArr = str.split(' ');
  var longest = '';
  strArr.forEach(function(x){
  	if(x.length > longest.length) {
  		longest = x;
  	}
  });
  return longest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


// split str by word
// var longest = '';
//  loop through the array, replace longest with the longest as
// it loops through.
// return longest.length; since it should return a number.

/////////////////////////

// NEXT PROBLEM

///////////////////////

// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.


function titleCase(str) {
  var wordsArr = str.toLowerCase().split(' ');
  var capitalize = '';
  for(var i = 0; i < wordsArr.length; i++) {
  	capitalize += wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1) + ' ';
  }
  return capitalize.trim();
}

titleCase("I'm a little tea pot");
// titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return "Short And Stout".

// split the sentence into words
// capitalize the first letter in each word
// join the words into 1 sentence again and return that.


/////////////////////////

// NEXT PROBLEM

///////////////////////

// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.


function largestOfFour(arr) {
	var biggestArr = [];
  for(var i = 0; i < arr.length; i++) {
    biggestArr.push(Math.max.apply(Math, arr[i]));
  }
  return biggestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/////////////////////////

// NEXT PROBLEM

///////////////////////

function confirmEnding(str, target) {
	var splitStr = str.split(' ');
  for(var i = splitStr.length - 1; i >= 0; i--) {
  	if(splitStr[splitStr.length - 1] === target) {
  		return true;
  	}
  }
  return false;
}

// confirmEnding("Bastian", "n");
confirmEnding("He has to give me a new name", "name") //should return
