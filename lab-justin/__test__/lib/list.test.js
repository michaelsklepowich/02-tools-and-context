'use strict';

let List = require('../../lib/list.js');

describe('List Module', () => {

  // test for constructor
  it('constructor() initializes with a length of 0', () => {
    let list = new List();
    expect(list.length).toBe(0);
  });

  // test for push
  it('push(), when run, increments the length by 1', () => {
    let list = new List();
    list.push('Foo');
    expect(list.length).toBe(1);
  });
  it('push(), when run, place item into object', () => {
    let list = new List();
    list.push('Foo');
    list.push('Bar');
    list.push('Baz');
    list.push('Bop');
    expect(list[3]).toBe('Bop');
  });

  // tests for pop()
  it('pop(), when run will remove last item from object and decrement length', () => {
    let list = new List();
    list.push('Foo');
    list.push('Bar');
    list.push('Baz');
    list.push('Bop');
    list.pop();
    expect(list).toEqual({0: 'Foo', 1: 'Bar', 2: 'Baz', length: 3});
  });

  it('pop(), when run, we expect pop to modify the array', () => {
    let list = new List();
    list.push('Foo');
    list.push('Bar');
    list.push('Baz');
    list.push('Bop');
    list.pop();
    list.pop();
    list.pop();
    expect(list).toEqual({ 0: 'Foo', length: 1 });
  });
  it('pop(), when run, we expect pop to return the popped value', () => {
    let list = new List();
    list.push('Foo');
    list.push('Bar');
    list.push('Baz');
    list.push('Bop');
    let popped = list.pop();
    expect(popped).toBe('Bop');
  });

  
});
  