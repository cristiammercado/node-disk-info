/**
 * Class with constants used in the application.
 */
export class Constants {

    /**
     * Command to execute on Windows.
     */
    public static readonly WINDOWS_COMMAND: string = 'wmic logicaldisk get Caption,FreeSpace,Size,VolumeSerialNumber,Description  /format:list';

    /**
     *  Command to execute on Windows if only the names are needed.
     */
    public static readonly WINDOWS_COMMAND_NAMES_ONLY: string = 'wmic logicaldisk get Caption  /format:list';

    /**
     * Command to execute on Linux.
     */
    public static readonly LINUX_COMMAND: string = 'df -P | awk \'NR > 1\'';

    /**
    * Command to execute on Linux if only the names are needed.
    */
    public static readonly LINUX_COMMAND_NAMES_ONLY: string = 'df -P | awk \'NR > 1 {print $6}\'';

    /**
     * Command to execute on OSX.
     */
    public static readonly DARWIN_COMMAND: string = 'df -P | awk \'NR > 1\'';

    /**
     * Command to execute on OSX if only the names are needed.
     */
    public static readonly DARWIN_COMMAND_NAMES_ONLY: string = 'df -P | awk \'NR > 1 {print $6}\'';

}
