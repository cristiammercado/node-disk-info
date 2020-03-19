import Drive from './classes/drive';
import {Darwin} from './platforms/darwin';
import {Linux} from './platforms/linux';
import {Windows} from './platforms/windows';
import {Utils} from './utils/utils';

/**
 * Get disk info according current platform.
 *
 * @author Cristiam Mercado
 * @return {Promise<Drive[]>} Promise resolves array of disks and their info.
 */
export function getDiskInfo(): Promise<Drive[]> {

    return new Promise((resolve, reject) => {

        try {

            const platform = Utils.detectPlatform();
            let drivesInfo: Drive[];

            switch (platform) {
                case 'win32':
                    drivesInfo = Windows.run();
                    resolve(drivesInfo);
                    break;
                case 'linux':
                    drivesInfo = Linux.run();
                    resolve(drivesInfo);
                    break;
                case 'darwin':
                    drivesInfo = Darwin.run();
                    resolve(drivesInfo);
                    break;
                default:
                    reject(new Error(`Platform not recognized: ${platform}`));
            }

        } catch (e) {
            reject(e);
        }

    })

}

/**
 * Get disk info according current platform in an syncronous way.
 *
 * @author Cristiam Mercado
 * @return {Drive[]} Array of disks and their info.
 */
export function getDiskInfoSync(): Drive[] {

    const platform = Utils.detectPlatform();
    let drivesInfo: Drive[];

    switch (platform) {
        case 'win32':
            drivesInfo = Windows.run();
            return drivesInfo;
        case 'linux':
            drivesInfo = Linux.run();
            return drivesInfo;
        case 'darwin':
            drivesInfo = Darwin.run();
            return drivesInfo;
        default:
            throw new Error(`Platform not recognized: ${platform}`);
    }

}
