'use strict';

const moo = require('cowsay');

const cowsay = module.exports = function() {
  let newText = process.argv[2] || 'moooooo';
  return moo.say({
    text : newText,
    e : '> <'
  });
};

console.log(cowsay());
