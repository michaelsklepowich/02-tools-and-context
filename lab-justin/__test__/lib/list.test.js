'use strict';

// TODO: make function creates list


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
  it('pop(), when run, will remove last item from object and decrement length', () => {
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

  //tests for shift
  it('shift(), when run, will remove the first item from object and decrement length', () => {
    let list = new List();
    list.push('Foo');
    list.push('Bar');
    list.push('Baz');
    list.push('Bop');
    list.shift();
    expect(list).toEqual({ 0: 'Bar', 1: 'Baz', 2: 'Bop', length: 3 });
  });

  it('shift(), when run, will return first element', () => {
    let list = new List();
    list.push('Foo');
    list.push('Bar');
    list.push('Baz');
    list.push('Bop');
    let shifted = list.shift();
    expect(shifted).toBe('Foo');
  });

  it('shift(), when run, can work multiple times on same array', () => {
    let list = new List();
    list.push('Foo');
    list.push('Bar');
    list.push('Baz');
    list.push('Bop');
    list.shift();
    list.shift();
    list.shift();
    expect(list).toEqual({ 0: 'Bop', length: 1 });
  });

  // tests for unshift
  it('unshift(), when run, will add parameters to front of list and adjust length accordingly', () => {
    let list = new List();
    list.push('Foo');
    list.push('Bar');
    list.push('Baz');
    list.push('Bop');
    list.unshift('Hello', 'John');
    expect(list).toEqual({ 0: 'Hello', 1: 'John', 2: 'Foo', 3: 'Bar', 4: 'Baz', 5: 'Bop', length: 6 });
  });
  
  it('unshift(), when run, should return the value of the new length of the list', () => {
    let list = new List();
    list.push('Foo');
    list.push('Bar');
    list.push('Baz');
    list.push('Bop');
    let newLength = list.unshift('Hello', 'John');
    expect(newLength).toBe(6);
  });

  // tests for forEach
  it('forEach(), when run, should apply callback parameter on each value of the list without changing value of list', () => {
    let list = new List();
    list.push('Foo');
    list.push('Bar');
    list.push('Baz');
    list.push('Bop');

    let logValues = function(item) {
      console.log(item + 'Bag');
    };
    list.forEach(logValues);

    expect(list).toEqual({ '0': 'Foo', '1': 'Bar', '2': 'Baz', '3': 'Bop', length: 4 });
  });

  // tests for map 
  it('map(), when run, should apply callback on each item and store in new array', () => {
    let list = new List();
    list.push('Foo');
    list.push('Bar');
    list.push('Baz');
    list.push('Bop');

    let newArray = list.map(val => val + 'Bag');

    expect(newArray).toEqual({ '0': 'FooBag', '1': 'BarBag', '2': 'BazBag', '3': 'BopBag', length: 4 });
  });

  it('map(), when run, original list should remain unchanged', () => {
    let list = new List();
    list.push('Foo');
    list.push('Bar');
    list.push('Baz');
    list.push('Bop');

    list.map(val => val + 'Bag');

    expect(list).toEqual({ '0': 'Foo', '1': 'Bar', '2': 'Baz', '3': 'Bop', length: 4 });
  });

  //test for filter
  it('filter(), when run, should return new list with items that statisfied the callback', () => {
    let list = new List();
    list.push('FooBag');
    list.push('Bar');
    list.push('BazBag');
    list.push('Bop');

    let newList = list.filter((val, i) => val.length === 6);

    expect(newList).toEqual({ '0': 'FooBag', '1': 'BazBag', length: 2 });
  });

  it('filter(), when run, should leave original list unmodified', () => {
    let list = new List();
    list.push('FooBag');
    list.push('Bar');
    list.push('BazBag');
    list.push('Bop');

    list.filter((val, i) => val.length === 6);

    expect(list).toEqual({ '0': 'FooBag', '1': 'Bar', '2': 'BazBag', '3': 'Bop', length: 4 });
  });

  // tests for slice
  it('slice(), when run, if there is one positive parameter, will return array from parameter to end', () => {
    let list = new List();
    list.push('Foo');
    list.push('Bar');
    list.push('Baz');
    list.push('Bop');

    let sliceArray = list.slice(1);

    expect(sliceArray).toEqual({ '0': 'Bar', '1': 'Baz', '2': 'Bop', length: 3 });
  });

  it('slice(), when run, if one parameter that references a value the doesn\'t exist, then return empty array', () => {

    let list = new List();
    list.push('Foo');
    list.push('Bar');
    list.push('Baz');
    list.push('Bop');

    let sliceArray = list.slice(100);

    expect(sliceArray).toEqual([]);
  });

  it('slice(), when run, should leave original list unmodified', () => {
    let list = new List();
    list.push('Foo');
    list.push('Bar');
    list.push('Baz');
    list.push('Bop');
    
    list.slice(1, 3);

    expect(list).toEqual({ '0': 'Foo', '1': 'Bar', '2': 'Baz', '3': 'Bop', length: 4 });
  });

  
});