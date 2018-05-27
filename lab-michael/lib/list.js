'use strict';

class List {

  constructor() {
    this.length = 0;
  }

  push(item) {
    this.length++;
    this[this.length] = item;
  }

  pop() {
    this.length--;
    let item = this[this.length];
    delete this[this.length];
    return item;
  }

  forEach(callback) {

    if (typeof callback !== 'function') {
      return undefined;
    }

    for (let i = 0; i <= this.length - 1; i++) {
      callback(this[i], i);
    }

  }

  map(callback) {

    if (typeof callback !== 'function') {
      return undefined;
    }

    let result = new List();

    for (let i = 0; i <= this.length - 1; i++) {
      result.push(callback(this[i], i));

    }

    return result;

  }

  reduce(callback) {

    if (typeof callback !== 'function') {
      return undefined;
    }
    let result = 0;
    for (let i = 0; i <= this.length - 1; i++) {
      result = callback(result, this[i]);
    }

    return result;

  }

}



//forEach
//map
//filter
//reduce

module.exports = List;
