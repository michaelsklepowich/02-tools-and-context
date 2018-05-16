'use strict';

let List = require('../../lib/list.js');

describe('List Module', () => {

  it('constructor() initializes with a length of 0', () => {
    let list = new List();
    expect(list.length).toBe(0);
  });

  it('push(), when run, increments the length by 1', () => {
    let list = new List();
    list.push('Foo');
    expect(list.length).toBe(1);
  });
  
});
  