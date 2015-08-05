'use strict';
var assert = require('assert');
var test = require('tape');

test(function (t) {
  require('../lib');
  var fs = require('fs');
  var con = require('console-pop');

  con.push();
  fs.writeFileSync('./writetest.txt', 'test');
  fs.unlinkSync('./writetest.txt');

  t.ok(con.pop(), 'it should log output when a fs.write* method is called');
  t.end();
});
