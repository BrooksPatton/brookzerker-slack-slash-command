const chai = require('chai')

const should = chai.should()

describe('canary test', () => {
  it('should succeed', () => {
    const five = 5
    five.should.equal(5)
  })
})
