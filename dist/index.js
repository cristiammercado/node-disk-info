"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var darwin_1 = require("./platforms/darwin");
var linux_1 = require("./platforms/linux");
var windows_1 = require("./platforms/windows");
var utils_1 = require("./utils/utils");
/**
 * Get disk info according current platform.
 *
 * @author Cristiam Mercado
 * @return {Promise<Drive[]>} Promise resolves array of disks and their info.
 */
function getDiskInfo() {
    return new Promise(function (resolve, reject) {
        try {
            var platform = utils_1.Utils.detectPlatform();
            var drivesInfo = void 0;
            switch (platform) {
                case 'win32':
                    drivesInfo = windows_1.Windows.run();
                    resolve(drivesInfo);
                    break;
                case 'linux':
                    drivesInfo = linux_1.Linux.run();
                    resolve(drivesInfo);
                    break;
                case 'darwin':
                    drivesInfo = darwin_1.Darwin.run();
                    resolve(drivesInfo);
                    break;
                default:
                    reject(new Error("Platform not recognized: " + platform));
            }
        }
        catch (e) {
            reject(e);
        }
    });
}
exports.getDiskInfo = getDiskInfo;
/**
 * Get disk info according current platform in an syncronous way.
 *
 * @author Cristiam Mercado
 * @return {Drive[]} Array of disks and their info.
 */
function getDiskInfoSync() {
    var platform = utils_1.Utils.detectPlatform();
    var drivesInfo;
    switch (platform) {
        case 'win32':
            drivesInfo = windows_1.Windows.run();
            return drivesInfo;
        case 'linux':
            drivesInfo = linux_1.Linux.run();
            return drivesInfo;
        case 'darwin':
            drivesInfo = darwin_1.Darwin.run();
            return drivesInfo;
        default:
            throw new Error("Platform not recognized: " + platform);
    }
}
exports.getDiskInfoSync = getDiskInfoSync;
