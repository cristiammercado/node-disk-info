"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var constants_1 = require("../utils/constants");
var drive_1 = __importDefault(require("../classes/drive"));
/**
 * Class with OSX specific logic to get disk info.
 */
var Darwin = /** @class */ (function () {
    function Darwin() {
    }
    /**
     * Execute specific OSX command to get disk info.
     *
     * @return {Drive[]} List of drives and their info.
     */
    Darwin.run = function () {
        var drives = [];
        var buffer = child_process_1.execSync(constants_1.Constants.DARWIN_COMMAND).toString();
        var lines = buffer.split('\n');
        lines.forEach(function (value, index, array) {
            if (value !== '') {
                var line = value.replace(/ +(?= )/g, '');
                var tokens = line.split(' ');
                var d = drive_1.default.builder()
                    .filesystem(tokens[0])
                    .blocks(isNaN(parseFloat(tokens[1])) ? +tokens[1] : 0)
                    .used(isNaN(parseFloat(tokens[2])) ? +tokens[2] : 0)
                    .available(isNaN(parseFloat(tokens[3])) ? +tokens[3] : 0)
                    .capacity(tokens[4])
                    .mounted(tokens[5])
                    .build();
                drives.push(d);
            }
        });
        return drives;
    };
    return Darwin;
}());
exports.Darwin = Darwin;
