/**
 * Class with constants used in the application.
 */
export class Constants {

    /**
     * Command to execute on Windows.
     */
    public static readonly WINDOWS_COMMAND: string = 'wmic logicaldisk get Caption,FreeSpace,Size,VolumeSerialNumber,Description  /format:list';

    /**
     * Command to execute on Linux.
     */
    public static readonly LINUX_COMMAND: string = 'df -P | awk \'NR > 1\'';

    /**
     * Command to execute on OSX.
     */
    public static readonly DARWIN_COMMAND: string = 'df -P | awk \'NR > 1\'';

}
