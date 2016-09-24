var list = function(names){
  var arr=[];
  var last="";
  for (var i=0;i<names.length;i++){
    arr.push(names[i].name);
  }
  if (names.length>1){
    last=arr.pop();
    return (arr.join(', ')+' & '+last);
  }
    else return arr.join();//convert to string, also solves case of 0 names
};


console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]));

console.log(list([{name: 'Bart'},{name: 'Lisa'}]));

console.log(list([{name: 'Bart'}]));

console.log(list([]));


// function list(names) {
//   return names.map(o => o.name).join(', ').replace(/^(.*)(, )(.*)$/, '$1 & $3');
// }




function pigIt(str){
  return str.split(' ').map(function(el){
    return el.slice(1) + el.slice(0,1) + 'ay';
  }).join(' ');
}


/////////////////////////

// NEXT PROBLEM

///////////////////////



// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.
//
// For example, take 153 (3 digits):

// Your code must return true or false depending upon whether the given number is a Narcissistic number.

function narcissistic( value ) {
	var numLength = value.toString().length;
	var digit = value.toString();
  	var nums = digit.split('');
  	var sum = 0;
  	for(var i = 0; i < nums.length; i++) {
		sum += (Math.pow(parseInt(nums[i]), numLength));
  	}
  	if (value === sum) {
  		return true;
  	} else {
  		return false;
  	}
}

console.log(narcissistic(371));
// 343 27 1

//if value = digits raised to the power of the length
// return true
// else return false

		// powerArr.push(Math.pow(parseInt(nums[i]), numLength));



/////////////////////////

// NEXT PROBLEM

///////////////////////



    // Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes and 43, 194, 4773 are not palindromes.
    //
    // Write a method palindrome_chain_length which takes a positive number and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.
    //
    // If the input number is already a palindrome, the number of steps is 0.
    //
    // Input will always be a positive integer.
    //
    // For example, start with 87:
    //
    // 87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884
    //
    // 4884 is a palindrome and we needed 4 steps to obtain it, so palindrome_chain_length(87) == 4


    // var palindromeChainLength = function(n) {
    // 	var reverseNum = n.toString().split('').reverse().join('');
    // 	var sum = n + parseInt(reverseNum);
    // };


    // if (n === n.reverse())


    var palindromeChainLength = function(n) {
    	var steps = 0;
    	var num = n;
    	while (num !== parseFloat(num.toString().split('').reverse().join(''))) {
    		num += parseFloat(num.toString().split('').reverse().join(''));
    		steps++;
    	}
    	return steps;
    };

    console.log(palindromeChainLength(87));


    /////////////////////////

    // NEXT PROBLEM

    ///////////////////////

    // Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.




    function XO(str) {
	var lower = str.toLowerCase();
    var lx = ' ';
    var lo = ' ';
    var random = ' ';
    for(var i = 0; i < lower.length; i++){
    	if (lower[i] === 'x') {
    		lx += lower[i];
    	}
    	else if (lower[i] === 'o') {
    		lo += lower[i];
    	}
    	else if (lower[i] !== 'x' || lower[i] !== 'o'){
    		random += lower[i];
    	}
    }
    if (lx.length === lo.length) {
    	return true;
    } else {
    	return false;
    }
}

console.log(XO('xo'));
console.log(XO('xxOo'));
console.log(XO('xxxm'));
console.log(XO('Oo'));
console.log(XO('ooom'));


// * Clever

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}


/////////////////////////

// NEXT PROBLEM - NOT SOLVED

///////////////////////


var bowlingScore = function(rolls) {
  var totalFrames = 10;
  var frame = rolls/2;
  while (frames === 0) {
  	if()
  }

}

console.log(bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
console.log(bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9]));
console.log(bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
console.log(bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10,1,0]));
console.log(bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0]));



/////////////////////////

// NEXT PROBLEM

///////////////////////

// Write a function that takes in a string of one or more words, and returns the same string,
// but with all five or more letter words reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


function spinWords(str){
  var split = str.split(' ');
  var n = '';
  for(var i = 0; i < split.length; i++) {
  	if(split[i].length >= 5) {
  		n += split[i].split('').reverse().join('') + ' ';
  	} else {
  		n += split[i] + ' ';
  	}
  }
  return n.trim();
}

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));

// * clever


// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }
//
// function spinWords(str){
//   wordsArray = str.split(' ');
//   wordsArray.forEach(function(word, index){
//     if (word.length > 4) {
//       wordsArray[index] = word.split('').reverse().join('');
//     }
//   });
//   return wordsArray.join(' ');
// }
//
//
// function spinWords(str){
//   return str.replace(/\w{5,}/g, function(w) {
//     return w.split('').reverse().join('');
//   });
// }


/////////////////////////

// NEXT PROBLEM

///////////////////////

//
// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.


function createPhoneNumber(numbers){
	var first = '(';
	var second = '';
	var third = '-';
  for(var i = 0; i < numbers.length; i++) {
  	if ([i] < [3] && numbers[i] !== 0) {
  		first += numbers[i];
  	}
  	else if ([i] > [2] && [i] < [6]) {
  		second += numbers[i];
  	}
  	else {
  		third += numbers[i];
  	}
  }
  return first + ')' + ' ' + second + third;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1 ,1, 1, 1]));
//should return "(123) 456-7890"

// * clever

// function createPhoneNumber(numbers){
//   numbers = numbers.join('');
//   return '(' + numbers.substring(0, 3) + ') '
//       + numbers.substring(3, 6)
//       + '-'
//       + numbers.substring(6);
// }
//
//
//
// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";
//
//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }
//
//   return format;
// }


/////////////////////////

// NEXT PROBLEM

///////////////////////


// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity
// to go for a short walk. The city provides its citizens with a
// Walk Generating App on their phones -- everytime you press the button it sends you an array of one-
// letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
// You know it takes you one minute to traverse one city block, so create a function that will
// return true if the walk the app gives you will take you exactly ten minutes
// (you don't want to be early or late!) and will, of course, return you to your starting point.
// Return false otherwise.
//
// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


function isValidWalk(walk) {
	var a = 0;
	var b = 0;
  walk.forEach(function(walkArr){
  	if(walkArr === 'n' || walkArr === 'w') {
  		a++;
  	}
  	else if(walkArr === 's' || walkArr === 'e') {
  		b++;
  	}
  })
  if(a > 5 || b > 5) {
  	return false;
  }
  else if (a < 5 || b < 5) {
  	return false;
  }
  else if(a === b) {
  	return true;
  }
  else if(a !== b) {
  	return false;
  	}
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(isValidWalk(['w']))
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))


// loop through walk Array
// if n and s match & w and e match then return true;

// * clever

//study switch statements

// function isValidWalk(walk) {
//   var dx = 0
//   var dy = 0
//   var dt = walk.length
//
//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case 'n': dy--; break
//       case 's': dy++; break
//       case 'w': dx--; break
//       case 'e': dx++; break
//     }
//   }
//
//   return dt === 10 && dx === 0 && dy === 0
// }


//look up filter

// function count(dir, walk) {
//   return walk.filter(function(d) {
//     return d == dir;
//   }).length;
// }
//
// function isValidWalk(walk) {
//   return walk.length === 10 &&
//   count('n', walk) == count('s', walk) &&
//   count('e', walk) == count('w', walk)
// }



/////////////////////////

// NEXT PROBLEM

///////////////////////

// The Prediction


// function predict() {
//   return 62847;
// }
//
// Math.random = function() {
// return 0;
// };



/////////////////////////

// NEXT PROBLEM

///////////////////////


// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

//for each

function pigIt(str){
  var word = str.split(' ');
  var l = ' ';
  word.forEach(function(w){
  	l += w.slice(1) + w.slice(0, 1) + 'ay' + ' ';
  })
  return l.trim();
}

//for loop

function pigIt(str){
  var word = str.split(' ');
  var l = ' '
  for (var i = 0; i < word.length; i++) {
  	l += word[i].slice(1) + word[i].slice(0, 1) + 'ay' + ' ';
  }
	return l.trim();
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('This is my string'));

// *clever
//
// function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }
//
//
// function pigIt(str){
//   return str.split(' ').map(function(el){
//     return el.slice(1) + el.slice(0,1) + 'ay';
//   }).join(' ');
// }



/////////////////////////

// NEXT PROBLEM

///////////////////////



function anagrams(word, words) {
	var w = word.split('').sort().join('');
	var anagramsArr = [];
	for(var i = 0; i < words.length; i++) {
		if(w === words[i].split('').sort().join('')) {
			anagramsArr.push(words[i]);
		}
	}
	return anagramsArr;
}

//loop through the array
//if words[i] has the same letters and the letters amount are = then push
//to a new array of anagrams

//return the anagrams array

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])); // []

// * clever
// String.prototype.sort = function() {
//   return this.split("").sort().join("");
// };
//
// function anagrams(word, words) {
//   return words.filter(function(x) {
//       return x.sort() === word.sort();
//   });
// }

// function anagrams(word, words) {
//   word = word.split('').sort().join('');
//   return words.filter(function(v) {return word == v.split('').sort().join('');});
// }


/////////////////////////

// NEXT PROBLEM

///////////////////////


Description:

// Your job is to group the words in anagrams.
//
// What is an anagram ?
//
// star and tsar are anagram of each other because you can rearrange the letters for star to obtain tsar.
//
// Example
//
// A typical test could be :


var groups = {};
words.forEach(function(w) {
  var s = w.split('').sort().join('');
  groups[s] = (groups[s] || []).concat([w]);
  console.log(    groups[s] = (groups[s] || []).concat([w]));
});
return Object.keys(groups).map(function(k) {return groups[k];});
}


console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]))

// ["tsar", "star", "tars"],
//   ["rat", "tar"],
//   ["cheese"]

/////////////////////////

// NEXT PROBLEM

///////////////////////

// You need to write regex that will validate a password to make sure it meets the follwing criteria:
//
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.


function validate(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}

validate('1ff24aQ');


// ^               # start of input
// (?=.*\d)           // use positive look ahead to see if at least one digit exists
// (?=.*?[A-Z])    # Lookahead to make sure there is at least one upper case letter
// (?=.*?[a-z])    # Lookahead to make sure there is at least one upper case letter
// (?=.*?[0-9])    # Lookahead to make sure there is at least one number
// [A-Za-z0-9]{6,} # Make sure there are at least 6 characters of [A-Za-z0-9]
// $               # end of input


/////////////////////////

// NEXT PROBLEM

///////////////////////

var uniqueInOrder=function(iterable){
  var str = iterable.toString().replace(/,/g, '');
  var arr = [];
  for(var i = 0; i < str.length; i++) {
  	if(str[i] !== str[i+1] && !isNaN(str[i])) {
  		arr.push(parseInt(str[i].slice(0, 1)));
  	}
  	else if(str[i] !== str[i+1] && str[i]) {
  		arr.push(str[i].slice(0, 1));
  	}
  }
  return arr;
};

console.log('AAAABBBCCDAABBB');
console.log('ABBCcAD');
console.log(uniqueInOrder([1,2,2,3,3]));

// * clever

// 1

// function uniqueInOrder(it) {
//   var result = []
//   var last
//
//   for (var i = 0; i < it.length; i++) {
//     if (it[i] !== last) {
//       result.push(last = it[i])
//     }
//   }
//
//   return result

/////////////////////////

// NEXT PROBLEM --NOT SOLVED

///////////////////////

function sumIntervals(intervals){
	// var test = intervals.toString()
	var arr = '';
	var test = 0;
	for(var i = 0; i < intervals.length; i++) {
		arr += intervals[i].toString().split(' ') + ','.trim();
	}
	var b = arr.split(',').map(function(item){
		return parseInt(item, 10);
	})
	var c = b.splice(0,b.length -1);
	return c;
}

// function sumIntervals(intervals){
// 	var test = intervals.toString()
// 	for(var i = 0; i < test.length; i++) {

// 	}

// }

// var a = "1,2,3,4";

// var b = a.split(',').map(function(item) {
//     return parseInt(item, 10);
// });

//loop through the Array
//subtract the 1st index from the 2nd.  ex [1,2] 2-1 = 1 interval;


console.log(sumIntervals([
   [1,2],
   [6, 10],
   [11, 15]
])); //returns 9
// console.log(sumIntervals([
//   [1,4],
//   [7, 10],
//   [3, 5]
// ])); // returns 7 [1,4] 3, [3,5] 2 -1 =1, [7,10] =3
// //if index 2 > index 1 of next array {
// //	var w = index 1 - index 2
// //  index 2 - index 1 - w;
// //}
// console.log(sumIntervals([
//   [1,5],
//   [10, 20],
//   [1, 6],
//   [16, 19],
//   [5, 11]
// ]));  //returns 19




/////////////////////////

// NEXT PROBLEM

///////////////////////



// Write a function which will accept an array of numbers and calculate the variance for the array.
//
// The variance for a set of numbers is found by subtracting the mean from every value, squaring the results, adding them all up and dividing by the number of elements.
//
// For example, in pseudo code, to calculate the variance for [1, 2, 2, 3].

// Takes an array of numbers and returns the variance as a float.
// The array of numbers will always have at least one element in it.
var variance = function(numbers) {
	var mean, add = 0, final = 0;
	numbers.forEach(function(num){
		add += num;
	});
	mean = add/numbers.length;
	var vari = numbers.map(function(n){
		return Math.pow((n - mean), 2);
	});
	vari.forEach(function(x){
		final += x;
	});
	return final/vari.length;
};
// loop through the array and add to a var called mean
//divide mean by number in array to get average.
// use map to get the variance
//variance is subtract mean from each number, squaring the results, adding all the values,
//then divide by the number of elements.

console.log(variance([-10, 0, 10, 20, 30]));
console.log(variance([8, 9, 10, 11, 12]));
console.log(variance([1.5, 2.5, 4, 2, 1, 1]));

// Made it shorter add the variables on one line.  took the last forEach
// and returned final += in map function.

var variance = function(numbers) {
	var mean, add = 0, final = 0;
	numbers.forEach(function(num){
		add += num;
	});
	mean = add/numbers.length;
	var vari = numbers.map(function(n){
		return final += Math.pow((n - mean), 2);
	});
	return final/vari.length;
};


/////////////////////////

// NEXT PROBLEM

///////////////////////

// Your task is to calculate the weights of two selectors
// and determine which of them will beat the other one.

function compare(a,b){
	var pointsA = 0, pointsB = 0, listA = a.split('.').join(' .').split('#').join(' #').split(' '), listB = b.split('.').join(' .').split('#').join(' #').split(' ');
	listA.forEach(function(a){
		if(!a || a === '*') {
			pointsA += 0;
		}
		else if(a.indexOf('#') === 0) {
			pointsA += 100;
		}
		else if (a.indexOf('.') === 0) {
			pointsA += 5;
		}
		else if (a.indexOf('.') === -1 || a.indexOf('#') ===-1) {
			pointsA += 1;
		}
	});
	listB.forEach(function(b){
		if(!b || b === '*') {
			pointsB += 0;
		}
		else if(b.indexOf('#') === 0) {
			pointsB += 100;
		}
		else if (b.indexOf('.') === 0) {
			pointsB += 5;
		}
		else if (b.indexOf('.') === -1 || b.indexOf('#') ===-1) {
			pointsB += 1;
		}
	});
	if(pointsA === pointsB) {
		pointsB += 100;
	}
	console.log('a', pointsA, 'b', pointsB);

  if(Math.max(pointsA, pointsB) === pointsA) {
  	return a;
  } else return b;
}


// var s = "A04.3 A new Code";
// var i = s.indexOf(' ');
// var partOne = s.slice(0, i).trim();
// var partTwo = s.slice(i + 1, s.length).trim();

console.log(compare("body p", "div")); // "body p"
console.log(compare(".class", "#id")); // "#id"
console.log(compare("div.big", ".small")); // "div.big"
console.log(compare(".big", ".small")); // ".small"
console.log(compare(".item", "div ul li a")); // ".item"
console.log(compare("p div p#list", "table.c8gcs1bgfiwgdxv4sfw29.strong.last.blue span .yellow")); // p div p#list
console.log(compare("p", "*")); // p
console.log(compare("#id", ".c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.c10.c11.c12.c13.c14.c15.c16.c17.c18.c19.c20.c21.c22.c23.c24.c25.c26.c27.c28.c29.c30.c31.c32.c33.c34.c35.c36.c37.c38.c39.c40.c41.c42.c43.c44.c45.c46.c47.c48.c49.c50.c51.c52.c53.c54.c55.c56.c57.c58.c59.c60.c61.c62.c63.c64.c65.c66.c67.c68.c69.c70.c71.c72.c73.c74.c75.c76.c77.c78.c79.c80.c81.c82.c83.c84.c85.c86.c87.c88.c89.c90.c91.c92.c93.c94.c95.c96.c97.c98.c99.c100.c101.c102.c103.c104.c105.c106.c107.c108.c109.c110.c111.c112.c113.c114.c115.c116.c117.c118.c119.c120.c121.c122.c123.c124.c125.c126.c127.c128.c129.c130.c131.c132.c133.c134.c135.c136.c137.c138.c139.c140.c141.c142.c143.c144.c145.c146.c147.c148.c149.c150.c151.c152.c153.c154.c155.c156.c157.c158.c159.c160.c161.c162.c163.c164.c165.c166.c167.c168.c169.c170.c171.c172.c173.c174.c175.c176.c177.c178.c179.c180.c181.c182.c183.c184.c185.c186.c187.c188.c189.c190.c191.c192.c193.c194.c195.c196.c197.c198.c199.c200.c201.c202.c203.c204.c205.c206.c207.c208.c209.c210.c211.c212.c213.c214.c215.c216.c217.c218.c219.c220.c221.c222.c223.c224.c225.c226.c227.c228.c229.c230.c231.c232.c233.c234.c235.c236.c237.c238.c239.c240.c241.c242.c243.c244.c245.c246.c247.c248.c249.c250.c251.c252.c253.c254.c255.c256")); // "#id"


// *clever

//1

// String.prototype.count = function(char) {
//   return this.split(char).length - 1;
// }
//
// function compare(a,b) {
//   function c(s) {
//     var s = s.split(" "), t = "*#.";
//     return s.reduce(function(p, c) { if (t.indexOf(c[0]) === -1) { return p + 1 } else return p }, 0);
//   }
//   if (a.count("#") > b.count("#")) return a;
//   if (b.count("#") > a.count("#")) return b;
//   if (a.count(".") > b.count(".")) return a;
//   if (b.count(".") > a.count(".")) return b;
//   if (c(a) > c(b)) return a;
//   if (c(b) > c(a)) return b;
//   return b;
// }

//2

// function compare(a,b){
//   var tokens, exp = /(#\w+)|(\.\w+)|(\w+)/g;
//   var i, precedence = [0, 0, 0];
//   while (tokens = exp.exec(a))
//     precedence = precedence.map(function (value, i) { return value + !!tokens[i + 1] });
//   while (tokens = exp.exec(b))
//     precedence = precedence.map(function (value, i) { return value - !!tokens[i + 1] });
//   for (i = 0; i < 3; i++) {
//     if (precedence[i] > 0) return a;
//     if (precedence[i] < 0) return b;
//   }
//   return b;
// }






/////////////////////////

// NEXT PROBLEM

///////////////////////

// Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
// For example:
// str1 is 'rkqodlw' and str2 is 'world' the output should return true.
// str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
// str1 is 'katas' and str2 is 'steak' should return false.
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered



function scramble(str1, str2) {
	var first = str1.split(''), second = str2.split(''), match = [];
	for(var i = 0; i < first.length; i++){
		for(var x = 0; x < second.length; x++) {
			if(first[i] === second[x]) {
				match.push(first[i], second[x])
			}
		}
	}
	return match
}


//loop through each word.
//if indexOf([i] === 0) return true;
// else return false

console.log(scramble('rkqodlw','world')); // true
// console.log(scramble('cedewaraaossoqqyt','codewars')) //true
// console.log(scramble('katas','steak')) //false
// console.log(scramble('scriptjava','javascript')) //true
// console.log(scramble('scriptingjava','javascript')) //true
// console.log(scramble('scriptsjava','javascripts')) //true
// console.log(scramble('jscripts','javascript')) //false
// console.log(scramble('aabbcamaomsccdd','commas')) //true


/////////////////////////

// NEXT PROBLEM

///////////////////////

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
//
// Please note that using "encode" in Python is considered cheating.


function rot13(str) {
	var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890+.! ', nStr ='NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm1234567890+.! ', rot = '';
	for(var i = 0; i < str.length; i++) {
		for(var x = 0; x < abc.length; x++){
			if(str[i] === abc[x]) {
				rot += nStr[x];
			}
		}
	}
	return rot.trim();
}


// *clever

//1
//
// function rot13(message) {
//   var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
//   return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
// }


//2
// var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ";
// var cipher   = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXWZABCDEFGHIJKLM";
//
// function rot13(message){
//   return message.split('').map(function(c) {
//     var i = alphabet.indexOf(c);
//     if (i < 0) {
//       // not in alphabet, return char
//       return c;
//     }
//
//     return cipher[i];
//   }).join('');
// }




/////////////////////////

// NEXT PROBLEM

///////////////////////

// Complete the solution so that the function will break up camel casing, using a space between words.

// complete the function
function solution(string) {
	var str = ""
    for(var i = 0; i < string.length; i++) {
    	if(string[i] === string[i].toUpperCase()) {
    		str += " " + string[i];
    	}
    	else {
    		str += string[i];
    	}
    }
    return str;
}


// *clever

//1

// function solution(string) {
// 	return string.split('').map(function(l){
// 		if(l === l.toUpperCase()) return " " + l;
// 		return l;
// 	}).join('');
// }

//2

// function solution(string) {
//   return(string.(/([A-Z])/g, ' $1'));
//
// }




/////////////////////////

// NEXT PROBLEM

///////////////////////


// Complete the method/function so that it converts dash/underscore delimited
// words into camel casing. The first word within the output
// should be capitalized only if the original word was capitalized.


function toCamelCase(str){
	var newStr = '';
	for(var i = 0; i < str.length; i++) {
		if(str[i] === '_' || str[i] === '-') {
			newStr += str[i + 1] = str[i + 1].toUpperCase();
			i++;
		}
		else {
			newStr += str[i];
		}
	}

	var mapStr = Array.prototype.map.call(newStr, function(l, i){
			return l.replace(/[-_]/, '')
	})
	return mapStr.join('');
}

console.log(toCamelCase('the-stealth-warrior')); // returns theStealthWarrior
console.log(toCamelCase('The_Stealth_Warrior')); // returns TheStealthWarrior

// * clever

// 1

// function toCamelCase(str) {
//   return str.replace(/[_-][A-Za-z]/g, function(match) {return match[1].toUpperCase();});
// }



/////////////////////////

// NEXT PROBLEM - NOT SOLVED

///////////////////////


var numberToPrice = function(number) {
  var numStr = number.toString();
  var num = Array.prototype.map.call(numStr, function(n){
  	if(n === '.') {
  		return n.replace(/[.]/, ' ')
  	} else {
  		return n;
  	}
  }).join('')
	return num;
}


// loop through a number
//  delete all periods to be add later.  map
// loop through backwards.  add . after second number. and cut it out to be add later.
// loop through the new number that doesn't have the last 2 nums,
// add a comma every third numb
// return the 2 numbers concat together

console.log(numberToPrice(1500.129)) // '1,500.12'
console.log(numberToPrice(-5)) // '-5.00'
console.log(numberToPrice(1000000.5)) // '1,000,000.50'
console.log(numberToPrice('@')) // 'NaN'



/////////////////////////

// NEXT PROBLEM

///////////////////////

// Your objective is to add formatting to a plain number to display it as price.

// var numberToPrice = function(number) {
//   var numStr = number.toString();
//   var num = Array.prototype.map.call(numStr, function(n){
//   	if(n === '.') {
//   		return n.replace(/[.]/, '')
//   	} else {
//   		return n;
//   	}
//   }).join('')
// 	return num;
// }

// Math.floor(15.7784514000 * 100) / 100
	// var numStr = ((parseInt(number * 100) / 100).toFixed(2)).toString();
	// var test = (parseInt(number * 100)/100).toFixed(2);



var numberToPrice = function(number) {
	var numStr = number.toString();
	return Array.prototype.map.call(numStr.split(' '), function(n){
		console.log(n.length)
	 	if(isNaN(n) || n === '') {
	 		return "NaN";
	 	}
	 	else if (n.length > 9) {
	 		return ((parseFloat(n * 100) / 100).toFixed(2)).toString()
	 	}
	 	else {
	 		return ((parseInt(n * 100) / 100).toFixed(2)).toString()
	 	}
	 }).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// loop through a number
//  delete all periods to be add later.  map
// loop through backwards.  add . after second number. and cut it out to be add later.
// loop through the new number that doesn't have the last 2 nums,
// add a comma every third numb
// return the 2 numbers concat together

console.log(numberToPrice(1500.129)) // '1,500.12'
console.log(numberToPrice(-5)) // '-5.00'
console.log(numberToPrice(1000000.5)) // '1,000,000.50'
console.log(numberToPrice('@')) // 'NaN'
console.log(numberToPrice(1234567.89))



/////////////////////////

// NEXT PROBLEM

///////////////////////

// Write a reverseWords function that accepts a string a parameter,
// and reverses each word in the string. Every space should stay,
// so you cannot use words from Prelude.



function reverseWords(str) {
  var s = str.split(' '), l = ' ';
  s.forEach(function(str){
  	 l += str.split('').reverse().join('') + ' ';
  })
  return l.trim();
}

console.log(reverseWords("This is an example!"))




/////////////////////////

// NEXT PROBLEM

///////////////////////


function solution(hour) {
  var h = hour.toString(), timeFormat = '';
  for(var i = h.length - 1; i >= 0; i--) {
  	if (h.length > 4 || h.length < 3) throw new Error('Please enter valid time');
		timeFormat += h[i];
  }
  timeFormat = timeFormat.slice(0, 2) + ':' + timeFormat.slice(2);
  return timeFormat.split('').reverse().join('');
}

console.log(solution(800));
console.log(solution(1000));
console.log(solution(1451));
console.log(solution(3351));
console.log(solution(10000));

// *clever

// 1

// function solution(hour) {
//   var string = hour.toString();
//   if (string.length < 3 || string.length > 4)
//     throw "Number must have 3 or 4 digits";
//   return string.slice(0, -2) + ":" + string.slice(-2);
// }
