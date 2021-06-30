(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  var print$1 = function print() {
    console.log('AAA');
  }; // test tree-shaking

  var print = function print() {
    console.log('BBB');
  };

  print$1();
  print();

})));
