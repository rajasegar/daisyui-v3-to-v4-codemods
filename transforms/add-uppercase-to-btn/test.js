'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'add-uppercase-to-btn',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`
});
