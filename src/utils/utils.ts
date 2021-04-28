import * as os from 'os';
import {execSync} from 'child_process';

/**
 * Class with utilitary methods.
 */
export class Utils {

    /**
     * Detects current platform.
     *
     * @return {string} Platform: win32, linux, darwin.
     */
    public static detectPlatform(): string {
        return os.platform().toLowerCase();
    }

    /**
     * Get chcp value (only for Win32 platform).
     *
     * @return {string} Platform: win32.
     */
     public static chcp(): string {
        return execSync('chcp').toString().split(':')[1].trim();
    }

    /**
     * Executes a command in SO console.
     *
     * @param {Buffer} command: Command to execute.
     */
    public static execute(command: string): Buffer {
        return execSync(command,{windowsHide: true, encoding: 'buffer'});
    }
}
