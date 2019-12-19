"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var darwin_1 = require("./platforms/darwin");
var linux_1 = require("./platforms/linux");
var windows_1 = require("./platforms/windows");
var os_1 = __importDefault(require("os"));
/**
 * Detects current platform.
 *
 * @return {string} Platform: win32, linux, darwin.
 */
function detectPlatform() {
    return os_1.default.platform().toLowerCase();
}
/**
 * Get disk info according current platform.
 *
 * @author Cristiam Mercado
 * @return {Promise<Drive[]>} Promise resolves array of disks and their info.
 */
function getDiskInfo() {
    var platform = detectPlatform();
    return new Promise(function (resolve, reject) {
        try {
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
                    reject('OS not recognized');
            }
        }
        catch (e) {
            reject(e);
        }
    });
}
exports.getDiskInfo = getDiskInfo;
