"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var os = __importStar(require("os"));
var child_process_1 = require("child_process");
/**
 * Class with utilitary methods.
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * Detects current platform.
     *
     * @return {string} Platform: win32, linux, darwin.
     */
    Utils.detectPlatform = function () {
        return os.platform().toLowerCase();
    };
    /**
     * Executes a command in SO console.
     *
     * @param {string} command: Command to execute.
     */
    Utils.execute = function (command) {
        return child_process_1.execSync(command).toString();
    };
    return Utils;
}());
exports.Utils = Utils;
