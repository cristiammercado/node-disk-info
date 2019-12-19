# Node disk info

Node module to get disk information in Windows, Linux & Mac. It works with Electron. The library will call system command to get drives info, parse the results and load info in array. Inspired by [diskinfo](https://github.com/BenoitGauthier/diskinfo).

[![Build Status](https://travis-ci.org/cristiammercado/node-disk-info.svg?branch=master)](https://travis-ci.org/cristiammercado/node-disk-info)

## Installation

`npm install --save node-disk-info`

## Usage

Import it and just call the main function:

```javascript
const nodeDiskInfo = require('node-disk-info');

// async mode
nodeDiskInfo.getDiskInfo().then(disks => {

        for (const disk of disks) {
            console.log('Filesystem:', disk.filesystem);
            console.log('Blocks:', disk.blocks);
            console.log('Used:', disk.used);
            console.log('Available:', disk.available);
            console.log('Capacity:', disk.capacity);
            console.log('Mounted:', disk.mounted);
            console.log('\n');
        }

    }).catch(reason => {
        console.error(reason);
    });

// sync mode
try {
    const disks = nodeDiskInfo.getDiskInfoSync();

    for (const disk of disks) {
        console.log('Filesystem:', disk.filesystem);
        console.log('Blocks:', disk.blocks);
        console.log('Used:', disk.used);
        console.log('Available:', disk.available);
        console.log('Capacity:', disk.capacity);
        console.log('Mounted:', disk.mounted);
        console.log('\n');
    }
} catch (e) {
    console.error(e);
}
```

## License

[MIT](https://github.com/cristiammercado/node-disk-info/blob/master/LICENSE)
