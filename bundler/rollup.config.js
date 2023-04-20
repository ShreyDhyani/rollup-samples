import CSS from "rollup-plugin-css-only";

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
      dir: "./dist-chunks-es",
      format: "es",
      inlineDynamicImports: true,
    },
    {
      dir: "./dist-chunks-cjs",
      format: "cjs",
      // inlineDynamicImports: true,
    },
    {
      dir: "./dist-chunks-iife",
      format: "iife",
      inlineDynamicImports: true,
    },
  ],
  plugins: [CSS({ output: "bundle.css" })],
};
