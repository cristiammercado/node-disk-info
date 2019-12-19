import { execSync } from 'child_process'
import { Constants } from '../utils/constants'

import Drive from '../classes/drive'

/**
 * Class with Windows specific logic to get disk info.
 */
export class Windows {

  /**
   * Execute specific Windows command to get disk info.
   *
   * @return {Drive[]} List of drives and their info.
   */
  public static run(): Drive[] {

    const drives: Drive[] = []
    const buffer = execSync(Constants.WINDOWS_COMMAND).toString()
    const lines = buffer.split('\r\r\n')

    let newDiskIteration = false

    let caption: string = ''
    let description: string = ''
    let fresSpace: number = 0
    let size: number = 0

    lines.forEach((value, index, array) => {

      if (value !== '') {

        const tokens = value.split('=')
        const section = tokens[0]
        const data = tokens[1]

        switch (section) {
          case 'Caption':
            caption = data
            newDiskIteration = true
            break
          case 'Description':
            description = data
            break
          case 'FreeSpace':
            fresSpace = isNaN(parseFloat(data)) ? +data : 0
            break
          case 'Size':
            size = isNaN(parseFloat(data)) ? +data : 0
            break
        }

      } else {

        if (newDiskIteration) {

          const used: number = (size - fresSpace)

          let percent = '0%'

          if (size > 0) {
            percent = Math.round((used / size) * 100) + '%'
          }

          const d = Drive.builder()
            .filesystem(description)
            .blocks(size)
            .used(used)
            .available(fresSpace)
            .capacity(percent)
            .mounted(caption)
            .build()

          drives.push(d)

          caption = ''
          description = ''
          fresSpace = 0
          size = 0
        }

      }

    })

    return drives
  }

}
