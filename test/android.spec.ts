import {Utils} from '../src/utils/utils';
import {getDiskInfo, getDiskInfoSync} from '../src';

describe('node-disk-info-android', () => {

    it('should not generate disks list info for unsupported so', (done) => {
        spyOn(Utils, 'detectPlatform').and.callFake(() => 'android');

        getDiskInfo()
            .then(values => {
                done.fail(new Error('Promise should not be resolved'));
            })
            .catch(reason => {
                expect(reason.message).toEqual('Platform not supported: android');
                done();
            });
    });

    it('should catch any error gracefully', (done) => {
        spyOn(Utils, 'detectPlatform').and.callFake(() => {
            throw new Error('An execution error');
        });

        getDiskInfo()
            .then(values => {
                done.fail(new Error('Promise should not be resolved'));
            })
            .catch(reason => {
                done();
            });
    });

    it('should not generate disks list info sync for unsupported so', () => {
        spyOn(Utils, 'detectPlatform').and.callFake(() => 'android');

        expect(() => getDiskInfoSync()).toThrowError('Platform not supported: android');
    });
});
