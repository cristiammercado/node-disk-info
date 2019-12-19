import { DriveBuilder } from './drive-builder';
import { IDriveJson } from './drive-json';
/**
 * Class with drive information.
 *
 * @author Cristiam Mercado
 */
export default class Drive {
    /**
     * Creates a new class instance from JSON.
     *
     * @param {IDriveJson} json JSON drive data.
     * @return {Drive} Drive class instance.
     */
    static fromJSON(json: IDriveJson): Drive;
    /**
     * Builder to generate a instance of Drive class.
     *
     * @param {Drive} drive Drive instance to copy of.
     */
    static builder(drive?: Drive): DriveBuilder;
    /**
     * Drive filesystem.
     */
    readonly filesystem: string;
    /**
     * Blocks associated to disk.
     */
    readonly blocks: number;
    /**
     * Used disk space.
     */
    readonly used: number;
    /**
     * Available disk space.
     */
    readonly available: number;
    /**
     * Disk capacity.
     */
    readonly capacity: string;
    /**
     * Indicates the mount point of the disk.
     */
    readonly mounted: string;
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
    private constructor();
    /**
     * Generates JSON of this class.
     *
     * @return {object} A JSON object.
     */
    toJSON(): IDriveJson;
}
