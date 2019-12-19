import Drive from './drive';
import {IDriveJson} from './drive-json';

/**
 * Builder for Drive class.
 *
 * @author Cristiam Mercado
 */
export class DriveBuilder {

    /**
     * Private JSON instance of Drive class.
     */
    private readonly json: IDriveJson;

    /**
     * Constructor.
     *
     * @param {Drive} drive Instance of Drive class.
     */
    constructor(drive?: Drive) {
        this.json = drive ? drive.toJSON() : {} as IDriveJson;
    }

    /**
     * Method to set filesystem property.
     *
     * @param {string} filesystem Drive filesystem.
     */
    public filesystem(filesystem: string): DriveBuilder {
        this.json.filesystem = filesystem;
        return this;
    }

    /**
     * Method to set blocks property.
     *
     * @param {number} blocks Blocks associated to disk.
     */
    public blocks(blocks: number): DriveBuilder {
        this.json.blocks = blocks;
        return this;
    }

    /**
     * Method to set used property.
     *
     * @param {number} used Used disk space.
     */
    public used(used: number): DriveBuilder {
        this.json.used = used;
        return this;
    }

    /**
     * Method to set available property.
     *
     * @param {number} available Available disk space.
     */
    public available(available: number): DriveBuilder {
        this.json.available = available;
        return this;
    }

    /**
     * Method to set capacity property.
     *
     * @param {string} capacity Disk capacity.
     */
    public capacity(capacity: string): DriveBuilder {
        this.json.capacity = capacity;
        return this;
    }

    /**
     * Method to set mounted property.
     *
     * @param {string} mounted Indicates the mount point of the disk.
     */
    public mounted(mounted: string): DriveBuilder {
        this.json.mounted = mounted;
        return this;
    }

    /**
     * Builds a Drive instance with data setted by methods.
     *
     * @return {Drive} Instance of Drive class.
     */
    public build(): Drive {
        return Drive.fromJSON(this.json);
    }
}
