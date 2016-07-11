const chai = require('chai');
const greet = require('../lib/greet');

describe('greet function', function() {
  it('should greet the world', function() {
    chai.expect(greet()).to.be('hello world');
  });
});
