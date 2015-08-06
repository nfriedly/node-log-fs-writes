'use strict';
var gulp = require('gulp');
var excludeGitignore = require('gulp-exclude-gitignore');
var shell = require('gulp-shell');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nsp = require('gulp-nsp');

var handleErr = function (err) {
  console.log(err.message);
  process.exit(1);
};

gulp.task('static', function () {
  return gulp.src('**/*.js')
    .pipe(excludeGitignore())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(jscs())
    .on('error', handleErr);
});

gulp.task('nsp', function (cb) {
  nsp('package.json', cb);
});

gulp.task('test', shell.task([
  'tape test/* | faucet'
]));

gulp.task('prepublish', ['nsp']);
gulp.task('default', ['static', 'test']);
