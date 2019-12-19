import {getDiskInfo} from '../src';

describe('node-disk-info', () => {

    it('should generate disks list info', () => {
        getDiskInfo()
            .then(values => {
                expect(values).toBeDefined();
                expect(values.length).toBeGreaterThanOrEqual(0);
            })
            .catch(reason => {
                throw reason;
            });
    });

    it('should generate disk info', () => {
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
            })
            .catch(reason => {
                throw reason;
            });
    });

});
