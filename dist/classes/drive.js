"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var drive_builder_1 = require("./drive-builder");
/**
 * Class with drive information.
 *
 * @author Cristiam Mercado
 */
var Drive = /** @class */ (function () {
    /**
     * Constructor for Drive class.
     *
     * @param {string} filesystem Drive filesystem.
     * @param {number} blocks Blocks associated to disk.
     * @param {number} used Used disk space.
     * @param {number} available Available disk space.
     * @param {string} capacity Disk capacity.
     * @param {string} mounted Indicates the mount point of the disk.
     */
    function Drive(filesystem, blocks, used, available, capacity, mounted) {
        this.filesystem = filesystem;
        this.blocks = blocks;
        this.used = used;
        this.available = available;
        this.capacity = capacity;
        this.mounted = mounted;
    }
    /**
     * Creates a new class instance from JSON.
     *
     * @param {IDriveJson} json JSON drive data.
     * @return {Drive} Drive class instance.
     */
    Drive.fromJSON = function (json) {
        return new Drive(json.filesystem, json.blocks, json.used, json.available, json.capacity, json.mounted);
    };
    /**
     * Builder to generate a instance of Drive class.
     *
     * @param {Drive} drive Drive instance to copy of.
     */
    Drive.builder = function (drive) {
        return new drive_builder_1.DriveBuilder(drive);
    };
    /**
     * Generates JSON of this class.
     *
     * @return {object} A JSON object.
     */
    Drive.prototype.toJSON = function () {
        return {
            available: this.available,
            blocks: this.blocks,
            capacity: this.capacity,
            filesystem: this.filesystem,
            mounted: this.mounted,
            used: this.used,
        };
    };
    return Drive;
}());
exports.default = Drive;
