'use strict';

class List {
  constructor() {
    this.length = 0;
  }
  push(item) {
    this[this.length] = item;
    this.length++;
  } 
  pop() {
    let popped = this[this.length - 1];
    delete this[this.length-1];
    this[this.length--];
    return popped;

  }
  shift() {
    let shifted = this[0];
    let array = [];
    let originalLength = this.length;

    for (let i = 0; i < originalLength; i++) {
      if (this[i + 1]) {
        array[i] = this[i + 1];
      }
      delete this[i];
      this.length--;
    }
    
    for (let i = 0; i < array.length; i++) {
      this.push(array[i]);
    }
    return shifted;
  }
  unshift(...args) {
    
    return this.length;
  }
  // forEach() {

  // }
  // map() {

  // }
  // filter() {

  // }
  // reduce() {

  // }
  // slice() {

  // }
  // splice() {

  // }
}

module.exports = List;