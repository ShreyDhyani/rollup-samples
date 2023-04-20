'use strict';

// import foo from "./src/foo";

module.exports = function () {
  //   console.log("Message is ->", foo);
  //   console.log(aoo);
  Promise.resolve().then(function () { return require('./boo-18ca0fb7.js'); }).then(({ default: str, Hello: Hello }) => {
    Hello();
    console.log("str>>", str);
  });
};
