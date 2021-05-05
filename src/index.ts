import Drive from './classes/drive';
import { Darwin } from './platforms/darwin';
import { Linux } from './platforms/linux';
import { Windows } from './platforms/windows';
import { Utils } from './utils/utils';

import DiskInfoOptions from './classes/options';
/**
 * Get disk info according current platform.
 *
 * @author Cristiam Mercado
 * @return {Promise<Drive[]>} Promise resolves array of disks and their info.
 */
export function getDiskInfo(options: DiskInfoOptions = new DiskInfoOptions()): Promise<Drive[]> {

    return new Promise((resolve, reject) => {

        try {

            const platform = Utils.detectPlatform();
            let drivesInfo: Drive[];

            switch (platform) {
                case 'aix': // IBM AIX platform
                    reject(new Error(`Platform not supported: ${platform}`));
                    break;
                case 'android': // Android platform
                    reject(new Error(`Platform not supported: ${platform}`));
                    break;
                case 'darwin': // Darwin platfrom(MacOS, IOS etc)
                    drivesInfo = Darwin.run(options);
                    resolve(drivesInfo);
                    break;
                case 'freebsd': // FreeBSD Platform
                    drivesInfo = Darwin.run(options);
                    resolve(drivesInfo);
                    break;
                case 'linux': // Linux Platform
                    drivesInfo = Linux.run(options);
                    resolve(drivesInfo);
                    break;
                case 'openbsd': // OpenBSD platform
                    drivesInfo = Darwin.run(options);
                    resolve(drivesInfo);
                    break;
                case 'sunos': // SunOS platform
                    reject(new Error(`Platform not supported: ${platform}`));
                    break;
                case 'win32': // windows platform
                    drivesInfo = Windows.run(options);
                    resolve(drivesInfo);
                    break;
                default: // unknown platform
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
 * @throws {Error} Current platform must be win32, linux or darwin.
 */
export function getDiskInfoSync(options: DiskInfoOptions = new DiskInfoOptions()): Drive[] {
    if (options == void 0) { options = new DiskInfoOptions() }
    const platform = Utils.detectPlatform();
    let drivesInfo: Drive[];

    switch (platform) {
        case 'aix': // IBM AIX platform
            throw new Error("Platform not supported: " + platform);
        case 'android': // Android platform
            throw new Error("Platform not supported: " + platform);
        case 'darwin': // Darwin platfrom(MacOS, IOS etc)
            drivesInfo = Darwin.run(options);
            return drivesInfo;
        case 'freebsd': // FreeBSD Platform
            drivesInfo = Darwin.run(options);
            return drivesInfo;
        case 'linux': // Linux Platform
            drivesInfo = Linux.run(options);
            return drivesInfo;
        case 'openbsd': // OpenBSD platform
            drivesInfo = Darwin.run(options);
            return drivesInfo;
        case 'sunos': // SunOS platform
            throw new Error("Platform not supported: " + platform);
        case 'win32': // windows platform
            drivesInfo = Windows.run(options);
            return drivesInfo;
        default: // unknown platform
            throw new Error("Platform not recognized: " + platform);
    }

}
