const typescript = require('rollup-plugin-typescript2')
const commonjs = require('rollup-plugin-commonjs')
const nodeResolve = require('rollup-plugin-node-resolve')
module.exports = [{
    input: 'src/index.ts',
    plugins: [
        typescript(),
        nodeResolve(),
        commonjs()
    ],
    output: {
        sourcemap: true,
        file: 'bundle.js',
        format: 'iife'
    }
}]
