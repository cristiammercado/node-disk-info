# Node disk info

Node module to get disk information in Windows, Linux, Mac, FreeBSD & OpenBSD. It works with Electron. The library will call system command to get drives info, parse the results and load info in array. Inspired by [diskinfo](https://github.com/BenoitGauthier/diskinfo).

[![Build Status](https://travis-ci.org/cristiammercado/node-disk-info.svg?branch=master)](https://travis-ci.org/cristiammercado/node-disk-info)
[![npm version](https://badge.fury.io/js/node-disk-info.svg)](https://badge.fury.io/js/node-disk-info)

## Installation

`npm install --save node-disk-info`

## Usage

See the [example script](example/index.js) for usage. You can run it with `npm run example`.

```js
// const nodeDiskInfo = require('node-disk-info'); => Use this when install as a dependency
const nodeDiskInfo = require('./dist/index');

// async way
nodeDiskInfo.getDiskInfo()
    .then(disks => {
        printResults('ASYNC WAY', disks);
    })
    .catch(reason => {
        console.error(reason);
    });

// sync way
try {
    const disks = nodeDiskInfo.getDiskInfoSync();
    printResults('SYNC WAY', disks);
} catch (e) {
    console.error(e);
}

function printResults(title, disks) {

    console.log(`============ ${title} ==============\n`);

    for (const disk of disks) {
        console.log('Filesystem:', disk.filesystem);
        console.log('Blocks:', disk.blocks);
        console.log('Used:', disk.used);
        console.log('Available:', disk.available);
        console.log('Capacity:', disk.capacity);
        console.log('Mounted:', disk.mounted, '\n');
    }

}
```

Output (example run on Windows):

```
============ SYNC WAY ==============

Filesystem: Disco fijo local
Blocks: 119387713536
Used: 109906608128
Available: 9481105408
Capacity: 92%
Mounted: C:

Filesystem: Disco fijo local
Blocks: 925015994368
Used: 639386984448
Available: 285629009920
Capacity: 69%
Mounted: D:

Filesystem: Disco CD-ROM
Blocks: 0
Used: 0
Available: 0
Capacity: 0%
Mounted: E:

============ ASYNC WAY ==============

Filesystem: Disco fijo local
Blocks: 119387713536
Used: 109906608128
Available: 9481105408
Capacity: 92%
Mounted: C:

Filesystem: Disco fijo local
Blocks: 925015994368
Used: 639386984448
Available: 285629009920
Capacity: 69%
Mounted: D:

Filesystem: Disco CD-ROM
Blocks: 0
Used: 0
Available: 0
Capacity: 0%
Mounted: E:
```

## Release History & Changelog

See the [Releases](https://github.com/cristiammercado/node-disk-info/releases) page for a list of all releases, including changes.

## Help / Support

If you run into any issues, please email me at [contact@cristiammercado.com](mailto:contact@cristiammercado.com) or you can use the contact form in [my page](https://www.cristiammercado.com/en/#contact).

For bug reports, please [open an issue on GitHub](https://github.com/cristiammercado/node-disk-info/issues/new).

## Contributing

1. [Fork it](https://github.com/cristiammercado/node-disk-info).
2. Create your feature branch (`git checkout -b my-new-feature`).
3. Commit your changes (`git commit -am 'Added some feature'`).
4. Push to the branch (`git push origin my-new-feature`).
5. Create a new Pull Request.

## License

[MIT](https://github.com/cristiammercado/node-disk-info/blob/master/LICENSE)
