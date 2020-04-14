// const nodeDiskInfo = require('node-disk-info'); => Use this when install as a dependency
const nodeDiskInfo = require('../dist/index');

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
