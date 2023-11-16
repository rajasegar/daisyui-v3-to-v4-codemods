'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({ 
  name: 'tab-modifiers',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});