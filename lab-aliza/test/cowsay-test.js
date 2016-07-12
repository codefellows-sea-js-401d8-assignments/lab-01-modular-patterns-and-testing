const cowsay = require('../index');
const expect = require('chai').expect;

describe('the cowsay function', function(){
  it('should display cow saying inputed string', function(){
    expect(cowsay('hello world')).to.eql(console.log(' ' +
      '-'.repeat('hello world'.length + 2) +
      '\n| ' +
      'hello world' +
      ' |\n' +
      ' ' +
      '-'.repeat('hello world'.length + 2) +
      '\n        \\   ^__^\n' +
      '         \\  (oo)\\_______ \n' +
      '            (__)\\       )\\/\\\n' +
      '                ||----w |\n' +
      '                ||     ||\n'
    ));
  });
});
