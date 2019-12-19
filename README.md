# Node disk info

Node module to get disk information in Windows, Linux & Mac. It works with Electron. The library will call system command to get drives info, parse the results and load info in array. Inspired by [diskinfo](https://github.com/BenoitGauthier/diskinfo).

## Installation

`npm install --save node-disk-info`

## Usage

Import it and just call the main function:

```javascript
const diskinfo = require('node-disk-info');

diskinfo.getDrives((error, drives) => {
    
    if (error) { // Catch error if exists
        console.log(error);
        return;
    }
    
    for (const drive of drives) { // Array with drives info
        console.log('Drive ' + drive.filesystem);
        console.log('Blocks ' + drive.blocks);
        console.log('Used ' + drive.used);
        console.log('Available ' + drive.available);
        console.log('Capacity ' + drive.capacity);
        console.log('Mounted ' + drive.mounted);
        console.log('-----------------------------------------');
    }

    
});
```
