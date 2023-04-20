'use strict';

var boo = "This is second Message!!";

function Hello() {
  console.log("Hello");
}

exports.Hello = Hello;
exports.default = boo;
