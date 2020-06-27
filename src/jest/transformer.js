module.exports = require('babel-jest').createTransformer({
  presets: [require.resolve('@babel/preset-env')],
  plugins: [require('../babel/log-once-plugin.js').LOG_ONCE_PLUGIN],
});
