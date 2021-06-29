// Secret Message
// Use array methods to transform an array of strings into a secret message!

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Heading
console.log('SECRET MESSAGE');

// Original secretMessage
// console.log(secretMessage);
console.log('Length of original message: ' + secretMessage.length);
// Output: Length of original message: 24

// return removed last string of the array secretMessage
// console.log('Return removed item: ' + secretMessage.pop());
// Output: Return removed item: JavaScript

// remove the last string of the array secretMessage
secretMessage.pop();
// console.log(secretMessage);

// check length is 1 less than the original length
console.log('Length of message (after last string removed): ' + secretMessage.length);
// Output: Length of message (after last string removed): 23

// add the words 'to' and 'Program' as separate strings to the end of the secretMessage array
secretMessage.push('to', 'Program');
// Output shows 'to' and 'Program' added to the end of the array

// change the word easily to the word right by accessing the index and replacing it


// remove the first string of the array


// add the string 'Programming' to the beginning of the array


// remove the strings 'get', 'right', 'the', 'first', 'time', and replace them with the single string 'know'


// use console.log() and .join() to print the secret message as a sentence


