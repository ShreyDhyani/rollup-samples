import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "./main.js",
  output: [
    {
      dir: "./dist/es",
      format: "es",
    },
    {
      dir: "./dist/cjs",
      format: "cjs",
    },
  ],

  plugins: [
    nodeResolve({
      extensions: [".js", ".jsx"],
    }),
    commonjs({
      include: ["node_modules/**"],
    }),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-react"],
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "dist"],
      historyApiFallback: true,
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "dist" }),
  ],
};
