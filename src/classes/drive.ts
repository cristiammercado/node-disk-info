/**
 * Class with drive information.
 *
 * @author Cristiam Mercado
 */
export default class Drive {

    /**
     * Drive filesystem.
     */
    private readonly _filesystem: string;

    /**
     * Blocks associated to disk.
     */
    private readonly _blocks: number;

    /**
     * Used disk space.
     */
    private readonly _used: number;

    /**
     * Available disk space.
     */
    private readonly _available: number;

    /**
     * Disk capacity.
     */
    private readonly _capacity: string;

    /**
     * Indicates the mount point of the disk.
     */
    private readonly _mounted: string;

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
    public constructor(filesystem: string, blocks: number, used: number, available: number, capacity: string, mounted: string) {
        this._filesystem = filesystem;
        this._blocks = blocks;
        this._used = used;
        this._available = available;
        this._capacity = capacity;
        this._mounted = mounted;
    }

    /**
     * Drive filesystem.
     *
     * @return Gets drive filesystem.
     */
    get filesystem(): string {
        return this._filesystem;
    }

    /**
     * Blocks associated to disk.
     *
     * @return Gets blocks associated to disk.
     */
    get blocks(): number {
        return this._blocks;
    }

    /**
     * Used disk space.
     *
     * @return Gets used disk space.
     */
    get used(): number {
        return this._used;
    }

    /**
     * Available disk space.
     *
     * @return Gets available disk space.
     */
    get available(): number {
        return this._available;
    }

    /**
     * Disk capacity.
     *
     * @return Gets disk capacity.
     */
    get capacity(): string {
        return this._capacity;
    }

    /**
     * Indicates the mount point of the disk.
     *
     * @return Gets the mount point of the disk.
     */
    get mounted(): string {
        return this._mounted;
    }
}
