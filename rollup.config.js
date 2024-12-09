import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import packageJson from "./package.json" assert { type: "json" };
import scss from "rollup-plugin-scss";
import del from "rollup-plugin-delete";
import image from '@rollup/plugin-image';

const peerDependencies = Object.keys(packageJson.peerDependencies)

export default [
  {
    external: [...peerDependencies],
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      del({ targets: 'dist/*' }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.build.json",
      }),
      // terser(),
      scss({
        fileName: "wds.css",
      }),
      image()
    ],
    onwarn(warning, warn) {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
        return
      }
      warn(warning)
    }
  },
];
