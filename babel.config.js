import babelPresetEnv from "@babel/preset-env";
import babelPresetTypescript from "@babel/preset-typescript";

export default {
  presets: [
    [
      babelPresetEnv,
      {
        targets: {
          node: "current", // 現在のNode.jsバージョンに合わせたES機能を使用
        },
      },
    ],
    [babelPresetTypescript],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
