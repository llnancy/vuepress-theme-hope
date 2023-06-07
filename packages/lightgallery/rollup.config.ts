import { bundle } from "../../scripts/rollup.js";

export default [
  ...bundle("node/index"),
  ...bundle(
    { base: "client", files: ["config", "index"] },
    {
      external: [/^lightgallery/],
    }
  ),
];
