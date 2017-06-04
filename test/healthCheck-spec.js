const chai = require('chai')
const supertest = require('supertest')
const app = require('../app')

const should = chai.should()
const api = supertest(app)

describe('Health check', () => {
  it('should return a 200', (done) => {
    api.get('/')
    .expect(200, done)
  })
})
