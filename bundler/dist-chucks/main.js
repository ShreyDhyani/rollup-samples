var foo = "Welcome to Rollup!!!";

module.exports = function () {
  console.log("Message is ->", foo);
  //   console.log(aoo);
  import('./boo-fbe96285.js').then(({ default: str, Hello: Hello }) => {
    Hello();
    console.log("str>>", str);
  });
};
