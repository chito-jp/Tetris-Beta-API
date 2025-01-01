import fs from "fs";
import json from "@rollup/plugin-json";
export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  external: Object.keys(
    JSON.parse(fs.readFileSync("package.json"))?.dependencies || {}
  ),
  plugins: [json()],
};
