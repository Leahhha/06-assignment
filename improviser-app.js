console.log('running improviser')

require('dotenv').config()

const cron = require('node-cron')
const Pushover = require('node-pushover');

cron.schedule('*/5 * * * * *', notify)

var randomNum;
var fs = require('fs');
var task = JSON.parse(fs.readFileSync('./notification.json','utf8'));

const push =  new Pushover({
    token: process.env.APP_TOKEN,
    user: process.env.USER_KEY
})

function notify() {

    randomNum = Math.floor(Math.random()*9);

    console.log('running notify');

    push.send(task[randomNum].subject,
        task[randomNum].message,
        handleErrors);


}

function handleErrors(error, response){
    if(error) console.log('error', error)
    console.log(response);
}

//////// Note //////////

// Math.random(): This function in JavaScript generates a random floating-point number between 0 (inclusive) and 1 (exclusive). In other words, it produces a random number from 0 (inclusive) to less than 1 (exclusive).

// Math.floor(): This function is used to round a number down to the nearest integer. When you pass the result of Math.random() * 9 to Math.floor(), it will round the random floating-point number to the nearest integer between 0 and 8.

// require('fs'): In Node.js, require is a function used to include modules. Here, you are requiring the built-in 'fs' module, which provides methods for interacting with the file system, such as reading and writing files, creating directories, and more.

// var fs = ...: This line is assigning the fs object to a variable named fs. By doing this, you can now use the fs object to access the functionality provided by the 'fs' module in your code.