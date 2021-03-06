// Secret Message
// Use array methods to transform an array of strings into a secret message!

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Heading
console.log('SECRET MESSAGE');

// Original secretMessage
// console.log(secretMessage);
console.log('Length of original message: ' + secretMessage.length);
// Output: Length of original message: 24


// return removed last element of the array secretMessage
// console.log('Return removed element: ' + secretMessage.pop());
// Output: Return removed element: JavaScript


// remove the last element of the array secretMessage
secretMessage.pop();
// console.log(secretMessage);


// check length is 1 less than the original length
console.log('Length of message (after last element removed): ' + secretMessage.length);
// Output: Length of message (after last element removed): 23


// add the words 'to' and 'Program' as separate strings to the end of the secretMessage array
secretMessage.push('to', 'Program');
// Output shows 'to' and 'Program' added to the end of the array
console.log("Add to end of array: 'to' and 'Program'");


// change the element 'easily' to the element 'right' by accessing the index and replacing it
secretMessage[7] = 'right';
console.log("Replace element 'easily' with: " + "'" + secretMessage[7] + "'");


// return removed first element of the array secretMessage
// console.log("Return removed first element: " + "'" + secretMessage.shift() + "'");
// Output: Return removed first element: 'Learning'
console.log("Original first element: " + "'" + secretMessage[0] + "'");
// Output: Original first element: 'Learning'

// remove the first string of the array
secretMessage.shift();
console.log("New first element (after removal): " + "'" + secretMessage[0] + "'");
// Output: New first element (after removal): 'is'

// add the string 'Programming' to the beginning of the array
secretMessage.unshift('Programming');
console.log("New first element (added): " + "'" + secretMessage[0] + "'");
// New first element (added): 'Programming'


// remove the strings 'get', 'right', 'the', 'first', 'time', and replace them with the single string 'know'
// console.log(secretMessage);
secretMessage.splice(6, 5, 'know, ');
// console.log(secretMessage);
console.log("Elements 'get', 'right', 'the', 'first', 'time' replaced with: " + "'" + secretMessage[6] + "'");


// use console.log() and .join() to print the secret message as a sentence
console.log(secretMessage.join(' '));
// Output: Programming is not about what you know,  it is about what you can figure out. -2015, Chris Pine, Learn to Program


// consult the https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array for reference on methods




