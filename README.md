# logOnce function

Sometimes you wish to print some diagnostic message to detect and issue
but you want to do it only once to avoid console spamming.

This package provides a function babel plugin to log only once in the certain
place. It uses combination of filename, line and column as unique key.
Heavily inspired by C styles macroses.

# Usage
Add plugin to the list of your babel plugins.

And then use like this
```javascript
import logOnce form 'logOnce';

for (let i = 0; i < 3; ++i) {
  logOnce(`i:${i}`); // only 'i:0' will be printed.
}
```
