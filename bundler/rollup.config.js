export default {
  input: "./main.js",
  output: [
    // {
    //   file: "dist/bundle.js",
    //   format: "cjs",
    // },
    // {
    //   file: "dist-es/bundle-es.js",
    //   format: "es",
    // },
    {
      dir: "./dist-chucks",
      format: "es",
    },
  ],
};
