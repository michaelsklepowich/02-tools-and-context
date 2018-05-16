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
    let originalLength = this.length;
    let newValues = [];
    let i = 0;
  
    while(args[i]) {
      newValues[i] = args[i];
      i++;
    }

    for(let k = 0; k < originalLength; k++) {
      newValues[i] = this[k];
      delete this[k];
      this.length--;
      i++;
    }

    for (let k = 0; k < newValues.length; k++) {
      this.push(newValues[k]);
    }
    return this.length;
  }
  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i]);
    }
  }
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