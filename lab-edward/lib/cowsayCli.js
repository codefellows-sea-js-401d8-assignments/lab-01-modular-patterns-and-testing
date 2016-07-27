var cowsay = require('../lib/cowsay');
var greeting = process.argv.slice(2).join(' ');

cowsay.cowsay(greeting);
