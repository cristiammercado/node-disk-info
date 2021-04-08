import {getDiskInfo, getDiskInfoSync} from '../src';
import {Utils} from '../src/utils/utils';
import * as os from 'os';

describe('node-disk-info-freebsd', () => {

    const FREEBSD_COMMAND_RESPONSE: Buffer = Buffer.from('/dev/sdb          15728640 2088556  11919636      15% /                                                                                                \n' +
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

    beforeAll(() => {
        if (os.platform() !== 'freebsd') {
            spyOn(Utils, 'detectPlatform').and.callFake(() => 'freebsd');
            spyOn(Utils, 'execute').and.callFake((command: string) => FREEBSD_COMMAND_RESPONSE);
        }
    });

    it('should generate disks list info for FreeBSD', (done) => {
        getDiskInfo()
            .then(values => {
                expect(values).toBeDefined();
                expect(values.length).toBeGreaterThanOrEqual(0);

                done();
            })
            .catch(reason => {
                done.fail(reason);
            });
    });

    it('should generate disk info for FreeBSD', (done) => {
        getDiskInfo()
            .then(values => {
                expect(values.length).toBeGreaterThan(0);

                const disk = values[0];

                expect(disk.filesystem).toBeDefined();
                expect(typeof disk.filesystem).toEqual('string');

                expect(disk.blocks).toBeDefined();
                expect(typeof disk.blocks).toEqual('number');

                expect(disk.used).toBeDefined();
                expect(typeof disk.used).toEqual('number');

                expect(disk.available).toBeDefined();
                expect(typeof disk.available).toEqual('number');

                expect(disk.capacity).toBeDefined();
                expect(typeof disk.capacity).toEqual('string');

                expect(disk.mounted).toBeDefined();
                expect(typeof disk.mounted).toEqual('string');

                done();
            })
            .catch(reason => {
                done.fail(reason);
            });
    });

    it('should generate disks list info sync for FreeBSD', () => {
        const values = getDiskInfoSync();

        expect(values).toBeDefined();
        expect(values.length).toBeGreaterThanOrEqual(0);
    });

    it('should generate disk info sync for FreeBSD', () => {
        const values = getDiskInfoSync();

        expect(values.length).toBeGreaterThan(0);

        const disk = values[0];

        expect(disk.filesystem).toBeDefined();
        expect(typeof disk.filesystem).toEqual('string');

        expect(disk.blocks).toBeDefined();
        expect(typeof disk.blocks).toEqual('number');

        expect(disk.used).toBeDefined();
        expect(typeof disk.used).toEqual('number');

        expect(disk.available).toBeDefined();
        expect(typeof disk.available).toEqual('number');

        expect(disk.capacity).toBeDefined();
        expect(typeof disk.capacity).toEqual('string');

        expect(disk.mounted).toBeDefined();
        expect(typeof disk.mounted).toEqual('string');
    });

});
