import { terser } from 'rollup-plugin-terser'
import nodePolyfills from 'rollup-plugin-node-polyfills'

export default {
  input: 'src/index.mjs',
  output: [
    {
      file: 'dist/index.esm.min.mjs',
      format: 'esm'
    },
    {
      file: 'dist/index.cjs.min.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.umd.min.js',
      format: 'iife'
    }
  ],
  plugins: [
    nodePolyfills(),
    terser()
  ]
}
