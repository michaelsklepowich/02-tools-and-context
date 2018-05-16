'use strict';

// TODO: Create Reduce
// TODO: Create Splice
// TODO: Finish slice with conditions

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
  map(callback) {
    let newList = new List();
    for (let i = 0; i < this.length; i++) {
      newList.push(callback(this[i], i));
    }
    return newList;
  }
  filter(callback) {
    let newList = new List();
    for(let i = 0; i < this.length; i++) {
      if (callback(this[i], i)) {
        newList.push(this[i]);
      }
    }
    return newList;
  } 
  //
  // reduce(callback, state) {
  // for (let i = 0; i <= this.length - 1; i++) {
  //   state = callback(this[i], i);
  // }
  // return state;
  // }
  //
  slice(...args) {
    let newList = new List();
    let array = [];
    let beg = 0; 
    let end = 0;
    let k = 0;

    if(args.length === 1 && this[args[0]]) {

      beg = args[0];
      end = this.length;

      for (let i = beg; i < end; i++) {
        array[k] = this[i];
        k++;
      }

    } else if (args.length === 1 && !this[args[0]]) { 
      return []; 
    } else if (args.length === 1 && args[0] < 0) {

      beg = this.length;
      end = args[0];

      for (let i = beg; i >= end; i--) {
        array[k] = this[i];
        k++;
      }
    }
    // if (beg)
    for (let i = 0; i < array.length; i++) {
      newList.push(array[i]);
    }
    return newList;
  }
  // splice() {

  // }
}

module.exports = List;