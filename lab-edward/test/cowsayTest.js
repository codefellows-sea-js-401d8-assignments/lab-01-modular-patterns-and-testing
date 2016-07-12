const expect = require('chai').expect;
const cowSay = require('../lib/cowsay');


describe('the cowSay function should', function() {
  it('should return a cow and a greeting', function() {
    expect(cowSay.cowsay('moooo')).to.eql(console.log(
      '                   \n' +
      '      ' + 'moooo' + '    \n' +
      '      ________     \n' +
      '        •           \n' +
      '         •          \n' +
      '          •         \n' +
      '          (___) \n' +
      '          (o o)_____/ \n' +
      '            @@\'    \\  \n' +
      '             \\ ____, / \n' +
      '            //    // '
    ));
  })
})
