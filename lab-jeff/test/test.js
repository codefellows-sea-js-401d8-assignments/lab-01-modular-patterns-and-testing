const main = require('../main.js');
const expect = require('chai').expect;

describe('cowsay()', function(){
  it('should return what the cow says', function(){
    expect(main.cowsay('Moo')).to.equal('The cow says: Moo');
  });
});
