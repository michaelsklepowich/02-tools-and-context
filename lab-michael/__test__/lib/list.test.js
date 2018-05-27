'use strict';

let List = require('../../lib/list.js');
console.log(typeof List);

describe('List Module', () => {

  it('constructor() function should have a .length of 0', () => {
    let list = new List();
    expect(list.length).toBe(0);
  });

  it('push() method, when called should increase length of list by 1', () => {
    let list = new List();
    list.push('anything');
    expect(list.length).toBe(1);
  });

});
