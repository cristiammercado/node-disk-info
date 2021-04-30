import {Constants} from '../utils/constants';

import Drive from '../classes/drive';
import {Utils} from "../utils/utils";

/**
 * Class with OSX specific logic to get disk info.
 */
export class Darwin {

    /**
     * Execute specific OSX command to get disk info.
     *
     * @return {Drive[]} List of drives and their info.
     */
    public static run(): Drive[] {

        const drives: Drive[] = [];
        const buffer = Utils.execute(Constants.DARWIN_COMMAND);
        const lines = buffer.toString().split('\n');

        lines.forEach((value, index, array) => {

            if (value !== '') {

                const line: string = value.replace(/ +(?= )/g, '');
                const tokens = line.split(' ');

                const d = new Drive(
                    tokens[0],
                    isNaN(parseFloat(tokens[1])) ? 0 : +tokens[1],
                    isNaN(parseFloat(tokens[2])) ? 0 : +tokens[2],
                    isNaN(parseFloat(tokens[3])) ? 0 : +tokens[3],
                    tokens[4],
                    tokens[5]);

                drives.push(d);

            }

        });

        return drives;
    }

}
