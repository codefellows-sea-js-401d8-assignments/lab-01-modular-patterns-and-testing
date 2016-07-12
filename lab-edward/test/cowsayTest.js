const expect = require('chai').expect;
const cowsay = require('../lib/cowsay');


describe('the cowsay function should', function() {
  it('should return a cow and a greeting', function() {
    expect(cowsay.cowsay('moooo')).to.eql(console.log(
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
  });
});
