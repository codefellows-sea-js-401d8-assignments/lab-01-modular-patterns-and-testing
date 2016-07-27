'use strict';

const moo = require('cowsay');
const expect = require('chai').expect;
const cowsay = require('../lib/cowsay');

describe('moo function', function() {
  it('should moo for us', function() {
    expect(cowsay('moooooo')).to.eql(moo.say({
      text : 'moooooo',
      e : '> <'
    }));
  });
});
