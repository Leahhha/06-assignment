# 06-assignment
Design:

Nowadays, people have more and more scheduled things to do, it would be a funthing to randomly get small tasks and followed it for fun.

I decide to use this Pushover app to automatically send notifications to users every 2 hours.


New knowledge: 

Math.random(): This function in JavaScript generates a random floating-point number between 0 (inclusive) and 1 (exclusive). In other words, it produces a random number from 0 (inclusive) to less than 1 (exclusive).

Math.floor(): This function is used to round a number down to the nearest integer. When you pass the result of Math.random() * 9 to Math.floor(), it will round the random floating-point number to the nearest integer between 0 and 8.

require('fs'): In Node.js, require is a function used to include modules. Here, you are requiring the built-in 'fs' module, which provides methods for interacting with the file system, such as reading and writing files, creating directories, and more.

var fs = ...: This line is assigning the fs object to a variable named fs. By doing this, you can now use the fs object to access the functionality provided by the 'fs' module in your code.
