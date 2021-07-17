/* eslint-disable @typescript-eslint/no-var-requires */
const CracoAlias = require('craco-alias');
const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require('@craco/craco');
const interpolateHtml = require('craco-interpolate-html-plugin');
const Test = require('html-loader');
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
    {
      plugin: interpolateHtml,
      // Enter the variable to be interpolated in the html file
      options: {
        preText: 'This is Interpolate Html Option',
      },
    },
    // {
    //   plugin: interpolateHtml,
    //   // Enter the variable to be interpolated in the html file
    //   options: {
    //     preText: 'This is Interpolate Html Option',
    //   },
    // },
  ],
};
