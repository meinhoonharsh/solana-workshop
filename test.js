const Quote = require('inspirational-quotes');
const cow = require("cowsay")


// Quote.getRandomQuote(); // return any random quote


console.log(cow.say({
    text : Quote.getRandomQuote(),
    e : "oO",
    T : "U "
}));