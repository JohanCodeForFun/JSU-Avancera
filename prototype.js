'use strict';

let arr = ['red', 'blue', 'green'];

Object.defineProperty(Array.prototype, 'last', {get: function() {
  return this[this.length-1];
}});
let last = arr.last
let arr2 = ['one', 'two', 'three']
display(arr.last);
display(arr2.last);