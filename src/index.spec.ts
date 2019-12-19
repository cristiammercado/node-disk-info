import { getDiskInfo } from './index'

describe('node-disk-info', () => {

  it('should generate disk info', () => {

    getDiskInfo()
      .then(value => {
        expect(value).toBeDefined()
        expect(value.length).toBeGreaterThanOrEqual(0)
      })
      .catch(reason => {
        throw reason
      })

  })

})
