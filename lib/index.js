'use strict';

// Stick this in the top of your main app.js/server.js/whatever file.
// Any time one of the below fs.* methods are called anywhere in the app or dependencies,
// this code will log the details including the method, arguments, and a stack trace.
// It will then complete the write as normal.
var fs = require('fs');
var on = true;
var prefix = 'no_log_';
['write','writeSync','writeFile','writeFileSync', 'appendFile', 'appendFileSync','createWriteStream'].forEach(function (fn) {
  fs[prefix + fn] = fs[fn];
  fs[fn] = function () {
    if (on) {
      var e = new Error();
      console.log('fs.%s(%s)', fn, Array.prototype.join.call(arguments, ', '));
      console.log(e.stack.split('\n').slice(2).join('\n')); // slice out the empty error and reference to this wrapper
      // disable the wrapper so that any internal fs.* calls are ignored
      on = false;
      var ret = fs[prefix + fn].apply(fs, arguments);
      on = true;
      return ret;
    } else {
      return fs[prefix + fn].apply(fs, arguments);
    }
  };
});
