import Drive from './classes/drive'
import { Darwin } from './platforms/darwin'
import { Linux } from './platforms/linux'
import { Windows } from './platforms/windows'

import os from 'os'

/**
 * Detects current platform.
 *
 * @return {string} Platform: win32, linux, darwin.
 */
function detectPlatform(): string {
  return os.platform().toLowerCase()
}

/**
 * Get disk info according current platform.
 *
 * @author Cristiam Mercado
 * @return {Promise<Drive[]>} Promise resolves array of disks and their info.
 */
export function getDiskInfo(): Promise<Drive[]> {

  const platform = detectPlatform()

  return new Promise((resolve, reject) => {

    try {

      let drivesInfo: Drive[]

      switch (platform) {
        case 'win32':
          drivesInfo = Windows.run()
          resolve(drivesInfo)
          break
        case 'linux':
          drivesInfo = Linux.run()
          resolve(drivesInfo)
          break
        case 'darwin':
          drivesInfo = Darwin.run()
          resolve(drivesInfo)
          break
        default:
          reject('OS not recognized')
      }

    } catch (e) {
      reject(e)
    }

  })

}
