/*  Using secret message in an array */

let secretMessage = 
['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 
'easily', 'the', 'first', 'time', 'it', 'is', 'about', 
'what', 'you', 'can', 'figure', 'out.', '-2015', 'Chris', 
'Pine', 'Learn','JavaScript'];

secretMessage.pop();

console.log(secretMessage.length);

secretMessage.push('to', 'Program.');

console.log(secretMessage);

console.log(secretMessage.indexOf('easily'));

secretMessage[7] = 'right';
secretMessage.shift();

console.log(secretMessage);

secretMessage.unshift('Programming')

secretMessage.splice(6, 10, 'know');

console.log(secretMessage);


console.log(secretMessage.join());



