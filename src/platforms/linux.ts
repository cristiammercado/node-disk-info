import {Constants} from '../utils/constants';

import Drive from '../classes/drive';
import {Utils} from "../utils/utils";

/**
 * Class with Linux specific logic to get disk info.
 */
export class Linux {

    /**
     * Execute specific Linux command to get disk info.
     *
     * @return {Drive[]} List of drives and their info.
     */
    public static run(): Drive[] {

        const drives: Drive[] = [];
        const buffer = Utils.execute(Constants.LINUX_COMMAND);
        const lines = buffer.toString().split('\n');

        lines.forEach((value) => {

            if (value !== '') {

                const line: string = value.replace(/ +(?= )/g, '');
                const tokens = line.split(' ');

                const d = new Drive(
                    tokens[0],
                    isNaN(parseFloat(tokens[1])) ? 0 : +tokens[1],
                    isNaN(parseFloat(tokens[2])) ? 0 : +tokens[2],
                    isNaN(parseFloat(tokens[3])) ? 0 : +tokens[3],
                    tokens[4],
                    tokens.slice(5).join(' ')); // [slice.join] prevent space splitting break the disk name

                drives.push(d);
            }

        });

        return drives;
    }

}
