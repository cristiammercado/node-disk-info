import {execSync} from 'child_process';
import {Constants} from '../utils/constants';

import Drive from '../classes/drive';

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
        const buffer = execSync(Constants.LINUX_COMMAND).toString();
        const lines = buffer.split('\n');

        lines.forEach((value) => {

            if (value !== '') {

                const line: string = value.replace(/ +(?= )/g, '');
                const tokens = line.split(' ');

                const d = Drive.builder()
                    .filesystem(tokens[0])
                    .blocks(isNaN(parseFloat(tokens[1])) ? +tokens[1] : 0)
                    .used(isNaN(parseFloat(tokens[2])) ? +tokens[2] : 0)
                    .available(isNaN(parseFloat(tokens[3])) ? +tokens[3] : 0)
                    .capacity(tokens[4])
                    .mounted(tokens[5])
                    .build();

                drives.push(d);

            }

        });

        return drives;
    }

}
