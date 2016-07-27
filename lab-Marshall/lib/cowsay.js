'use strict';

const moo = require('cowsay');

const cowsay = module.exports = function(a) {
  let newText = process.argv[2] || a;
  return moo.say({
    text : newText,
    e : '> <'
  });
};

console.log(cowsay('moooooo'));
