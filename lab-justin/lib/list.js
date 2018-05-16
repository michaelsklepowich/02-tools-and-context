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
  // shift() {

  // }
  // unshift() {

  // }
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