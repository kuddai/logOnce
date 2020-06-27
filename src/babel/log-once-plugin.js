const { NodePath, PluginObj } = require('@babel/core');

const template = require('@babel/template');
const t = require('@babel/types');

// Heavily inspired by this plugin
// https://github.com/peteringram0/babel-plugin-console-source
function logOncePlugin() {
  return {
    visitor: {
      CallExpression(path, state) {
        const opts = state.opts;
        if (
          !(
            t.isCallExpression(path.node) && path.node.callee.name === 'logOnce'
          )
        ) {
          return;
        }

        let file = state.file.opts.filename;

        if (typeof opts.resolveFile === 'function') {
          file = opts.resolveFile(file);
        } else if (!opts || opts.segments !== 0) {
          const sep = opts.splitSegment ? opts.splitSegment : '/';
          file = state.file.opts.filename.split(sep);
          let segs = file.slice(Math.max(file.length - opts.segments));
          file = segs.join('/');
        }

        let id = [
          file,
          path.node.loc.start.line,
          path.node.loc.start.column,
        ].join(':');

        path.node.arguments.unshift({
          type: 'StringLiteral',
          value: id,
        });
      },
    },
  };
}

module.exports.LOG_ONCE_PLUGIN = logOncePlugin;
