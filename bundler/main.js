// import foo from "./src/foo";
// import aoo from "./src/aoo";
// import { Hello } from "./src/boo";

import "./src/styles.css";
import "./src/styles1.css";

module.exports = function () {
  //   console.log("Message is ->", foo);
  //   console.log(aoo);
  import("./src/boo").then(({ default: str, Hello: Hello }) => {
    Hello();
    console.log("str>>", str);
  });
};
