# log-fs-writes 

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> Logs details any time any module uses fs.* to write to the filesystem

Built to help debugging when you're trying to figure out who/what/when/where/why something is writing to your disk.

## Install

```sh
$ npm install --save-dev log-fs-writes
```


## Usage

Include this at the top of your main app.js/server/js/whatever file

```js
require('log-fs-writes');
```

Any time a `fs.*` write method is called, you'll get console output similar to:

```
fs.writeFileSync(myfile.txt, file contents)
    at writeSomething (/Users/nfriedly/log-fs-writes/app.js:5:5)
    at Object.<anonymous> (/Users/nfriedly/log-fs-writes/app.js:8:1)
    at Module._compile (module.js:460:26)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12):267:12)
    at Function.Module.runMain (module.js:501:10)
    at startup (node.js:129:16)js:107:17)
    at node.js:814:3terface._onLine (readline.js:214:10)
```

## License

MIT © [Nathan Friedly](http://nfriedly.com/)


[npm-image]: https://badge.fury.io/js/log-fs-writes.svg
[npm-url]: https://npmjs.org/package/log-fs-writes
[travis-image]: https://api.travis-ci.org/nfriedly/node-log-fs-writes.svg?branch=master
[travis-url]: https://travis-ci.org/nfriedly/node-log-fs-writes
[daviddm-image]: https://david-dm.org/nfriedly/node-log-fs-writes.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/nfriedly/node-log-fs-writes
[coveralls-image]: https://coveralls.io/repos/nfriedly/node-log-fs-writes/badge.svg
[coveralls-url]: https://coveralls.io/r/nfriedly/node-log-fs-writes
