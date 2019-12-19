import { DriveBuilder } from './drive-builder'
import { IDriveJson } from './drive-json'

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
  public static fromJSON(json: IDriveJson): Drive {
    return new Drive(json.filesystem, json.blocks, json.used, json.available, json.capacity, json.mounted)
  }

  /**
   * Builder to generate a instance of Drive class.
   *
   * @param {Drive} drive Drive instance to copy of.
   */
  public static builder(drive?: Drive): DriveBuilder {
    return new DriveBuilder(drive)
  }

  /**
   * Drive filesystem.
   */
  private readonly filesystem: string

  /**
   * Blocks associated to disk.
   */
  private readonly blocks: number

  /**
   * Used disk space.
   */
  private readonly used: number

  /**
   * Available disk space.
   */
  private readonly available: number

  /**
   * Disk capacity.
   */
  private readonly capacity: string

  /**
   * Indicates the mount point of the disk.
   */
  private readonly mounted: string

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
  private constructor(filesystem: string, blocks: number, used: number, available: number, capacity: string, mounted: string) {
    this.filesystem = filesystem
    this.blocks = blocks
    this.used = used
    this.available = available
    this.capacity = capacity
    this.mounted = mounted
  }

  /**
   * Generates JSON of this class.
   *
   * @return {object} A JSON object.
   */
  public toJSON(): IDriveJson {

    return {
      available: this.available,
      blocks: this.blocks,
      capacity: this.capacity,
      filesystem: this.filesystem,
      mounted: this.mounted,
      used: this.used,
    }
  }
}
