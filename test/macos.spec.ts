import { getDiskInfo, getDiskInfoSync } from '../src';
import { Utils } from '../src/utils/utils';
import * as os from 'os';
import { Constants } from '../src/utils/constants';
import DiskInfoOptions from '../src/classes/options';

describe('node-disk-info-macos', () => {

    const DARWIN_COMMAND_RESPONSE: Buffer = Buffer.from('/dev/sdb          15728640 2088556  11919636      15% /                                                                                                \n' +
        'none                   492       4       488       1% /dev                                                                                             \n' +
        'udev               6144744       0   6144744       0% /dev/tty                                                                                         \n' +
        'tmpfs                  100       0       100       0% /dev/lxd                                                                                         \n' +
        'tmpfs                  100       0       100       0% /dev/.lxd-mounts                                                                                 \n' +
        'tmpfs              6151516       0   6151516       0% /dev/shm                                                                                         \n' +
        'tmpfs              6151516       4   6151512       1% /run                                                                                             \n' +
        'tmpfs                   xx       0      5120       0% /run/lock                                                                                        \n' +
        'tmpfs              6151516       0   6151516       0% /sys/fs/cgroup                                                                                   \n' +
        'tmpfs                  100       x       100       0% /var/lib/lxd/shmounts                                                                            \n' +
        'tmpfs                  100       0        xx       0% /var/lib/lxd/devlxd                                                                              \n' +
        '/dev/sdb          15728640 2088556  11919636      15% /var/lib/lxd/storage-pools/default                                                               \n', 'utf8');

    const DARWIN_COMMAND_RESPONSE_NAMES_ONLY: Buffer = Buffer.from('/                                                                                                \n' +
        '/dev                                                                                             \n' +
        '/dev/tty                                                                                         \n' +
        '/dev/lxd                                                                                         \n' +
        '/dev/.lxd-mounts                                                                                 \n' +
        '/dev/shm                                                                                         \n' +
        '/run                                                                                             \n' +
        '/run/lock                                                                                        \n' +
        '/sys/fs/cgroup                                                                                   \n' +
        '/var/lib/lxd/shmounts                                                                            \n' +
        '/var/lib/lxd/devlxd                                                                              \n' +
        '/var/lib/lxd/storage-pools/default                                                               \n', 'utf8');


    beforeAll(() => {
        if (os.platform() !== 'darwin') {
            spyOn(Utils, 'detectPlatform').and.callFake(() => 'darwin');
            spyOn(Utils, 'execute').and.callFake((param) => {
                if (param === Constants.DARWIN_COMMAND)
                    return DARWIN_COMMAND_RESPONSE;
                else
                    return DARWIN_COMMAND_RESPONSE_NAMES_ONLY;
            });
        }
    });

    it('should generate disks list info for Mac OS', (done) => {
        Promise.all([getDiskInfo(), getDiskInfo(new DiskInfoOptions()), getDiskInfo(new DiskInfoOptions(false)), getDiskInfo(new DiskInfoOptions(true))])
            .then((values) => {
                expect(values).toBeDefined();
                expect(values.length).toBeGreaterThanOrEqual(0);
                expect(values.every(value => value.length > 0))
                done();
            })
            .catch((reason) => {
                done.fail(reason);
            });
    });

    it('should generate disk info for Mac OS', (done) => {
        Promise.all([getDiskInfo(), getDiskInfo(new DiskInfoOptions()), getDiskInfo(new DiskInfoOptions(false))])
            .then((vals) => {
                vals.forEach(values => {


                    expect(values.length).toBeGreaterThan(0);

                    const disk = values[0];

                    expect(disk.filesystem).toBeDefined();
                    expect(typeof disk.filesystem).toEqual("string");

                    expect(disk.blocks).toBeDefined();
                    expect(typeof disk.blocks).toEqual("number");

                    expect(disk.used).toBeDefined();
                    expect(typeof disk.used).toEqual("number");

                    expect(disk.available).toBeDefined();
                    expect(typeof disk.available).toEqual("number");

                    expect(disk.capacity).toBeDefined();
                    expect(typeof disk.capacity).toEqual("string");

                    expect(disk.mounted).toBeDefined();
                    expect(typeof disk.mounted).toEqual("string");
                });
                done();
            })
            .catch((reason) => {
                done.fail(reason);
            });
    });

    it('should generate disk info for Mac OS - names only', (done) => {
        Promise.all([getDiskInfo(new DiskInfoOptions(true))])
            .then((vals) => {
                vals.forEach(values => {
                    expect(values.length).toBeGreaterThan(0);

                    const disk = values[0];

                    expect(disk.filesystem).toBeDefined();
                    expect(typeof disk.filesystem).toEqual("string");

                    expect(disk.blocks).toBeDefined();
                    expect(typeof disk.blocks).toEqual("number");

                    expect(disk.used).toBeDefined();
                    expect(typeof disk.used).toEqual("number");

                    expect(disk.available).toBeDefined();
                    expect(typeof disk.available).toEqual("number");

                    expect(disk.capacity).toBeUndefined();
                    expect(typeof disk.capacity).toEqual("undefined");

                    expect(disk.mounted).toBeUndefined();
                    expect(typeof disk.mounted).toEqual("undefined");
                });
                done();
            })
            .catch((reason) => {
                done.fail(reason);
            });
    });

    it('should generate disks list info sync for Mac OS', () => {
        var results = [getDiskInfoSync(), getDiskInfoSync(new DiskInfoOptions()), getDiskInfoSync(new DiskInfoOptions(false)), getDiskInfoSync(new DiskInfoOptions(true))]
        results.forEach(values => {
            expect(values).toBeDefined();
            expect(values.length).toBeGreaterThanOrEqual(0);
        });
    });

    it('should generate disk info sync for Mac OS', () => {
        var results = [getDiskInfoSync(), getDiskInfoSync(new DiskInfoOptions()), getDiskInfoSync(new DiskInfoOptions(false))]
        results.forEach(values => {
            expect(values.length).toBeGreaterThan(0);

            const disk = values[0];

            expect(disk.filesystem).toBeDefined();
            expect(typeof disk.filesystem).toEqual("string");

            expect(disk.blocks).toBeDefined();
            expect(typeof disk.blocks).toEqual("number");

            expect(disk.used).toBeDefined();
            expect(typeof disk.used).toEqual("number");

            expect(disk.available).toBeDefined();
            expect(typeof disk.available).toEqual("number");

            expect(disk.capacity).toBeDefined();
            expect(typeof disk.capacity).toEqual("string");

            expect(disk.mounted).toBeDefined();
            expect(typeof disk.mounted).toEqual("string");
        });
    });
    it('should generate disk info sync for Mac OS - names only', () => {
        var results = [getDiskInfoSync(new DiskInfoOptions(true))]
        results.forEach(values => {
            expect(values.length).toBeGreaterThan(0);

            const disk = values[0];

            expect(disk.filesystem).toBeDefined();
            expect(typeof disk.filesystem).toEqual("string");

            expect(disk.blocks).toBeDefined();
            expect(typeof disk.blocks).toEqual("number");

            expect(disk.used).toBeDefined();
            expect(typeof disk.used).toEqual("number");

            expect(disk.available).toBeDefined();
            expect(typeof disk.available).toEqual("number");

            expect(disk.capacity).toBeUndefined();
            expect(typeof disk.capacity).toEqual("undefined");

            expect(disk.mounted).toBeUndefined();
            expect(typeof disk.mounted).toEqual("undefined");
        });
    });
});
