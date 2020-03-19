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
     * Executes a command in SO console.
     *
     * @param {string} command: Command to execute.
     */
    public static execute(command: string): string {
        return execSync(command).toString();
    }
}
