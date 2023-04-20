(function () {
  'use strict';

  // import foo from "./src/foo";

  module.exports = function () {
    //   console.log("Message is ->", foo);
    //   console.log(aoo);
    Promise.resolve().then(function () { return boo$1; }).then(({ default: str, Hello: Hello }) => {
      Hello();
      console.log("str>>", str);
    });
  };

  var boo = "This is second Message!!";

  function Hello() {
    console.log("Hello");
  }

  var boo$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Hello: Hello,
    default: boo
  });

})();
