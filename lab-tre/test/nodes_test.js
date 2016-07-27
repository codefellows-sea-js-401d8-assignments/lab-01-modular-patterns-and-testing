const expect = require('chai').expect;
const cowsay = require('../nodes');

describe('what the cow says', function() {
  it('should say what the user inputs', function() {
    expect(cowsay()).to.eql('mooo cow says undefined');
  });
});
