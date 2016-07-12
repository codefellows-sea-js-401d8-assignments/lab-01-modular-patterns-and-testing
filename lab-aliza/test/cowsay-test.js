const cowsay = require('../lib/cowsay');
const expect = require('chai').expect;

describe('the cowsay function', function(){
  it('should display cow saying inputed string', function(){
    expect(cowsay('hello world')).to.eql('hello world');
  });
});
