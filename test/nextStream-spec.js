const chai = require('chai')
const supertest = require('supertest')
const moment = require('moment')
const app = require('../app')

const should = chai.should()
const api = supertest(app)

describe('next stream command', () => {
  it('should succeed in responding with the amount of time until the next scheduled stream', (done) => {
    api.post('/')
    .send(createPayload())
    .expect(200)
    .end((err, res) => {
      if(err) return done(err)

      res.body.response_type.should.equal('ephemeral')
      res.body.text.should.equal(nextStream())

      done()
    })
  })
})

function createPayload() {
  return {
    token: 'r4BYcQLROms75K61koOt4JRX',
    team_id: 'T07CYHHPU',
    team_domain: 'brookzerker',
    channel_id: 'C07CYHLCA',
    channel_name: 'general',
    user_id: 'U07CYSUAX',
    user_name: 'brookzerker',
    command: '/brookzerkerbot',
    text: 'next stream',
    response_url: 'https://hooks.slack.com/commands/T07CYHHPU/193130142390/wXq0K6zMsoE4RDltkXXfOYsz'
  }
}

function nextStream() {
  const now = moment()

  switch (now) {
    case 0:
      
      break;
    default:

  }
}
