// const nodeDiskInfo = require('node-disk-info'); when install as dependency
const nodeDiskInfo = require('../dist/index');

// async mode
nodeDiskInfo.getDiskInfo()
    .then(disks => {
        printResults('Async Mode', disks);
    })
    .catch(reason => {
        console.error(reason);
    });

// sync mode
try {
    const disks = nodeDiskInfo.getDiskInfoSync();
    printResults('Sync Mode', disks);
} catch (e) {
    console.error(e);
}

function printResults(title, disks) {

    console.log(`============ ${title} ==============`);

    for (const disk of disks) {
        console.log('\nFilesystem:', disk.filesystem);
        console.log('Blocks:', disk.blocks);
        console.log('Used:', disk.used);
        console.log('Available:', disk.available);
        console.log('Capacity:', disk.capacity);
        console.log('Mounted:', disk.mounted);
    }

}
