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

  it('should give an error when not given a known command', (done) => {
    const obj = createPayload()

    obj.text = 'yo'

    api.post('/')
    .send(obj)
    .expect(200)
    .end((err, res) => {
      if(err) return done(err)

      res.body.response_type.should.equal('ephemeral')
      res.body.text.should.equal(`Sorry, I couldn'nt understand you :cry:`)

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
  const now = moment().day()
  let day

  switch (now) {
    case 0:
      day = 'Monday'
      break;
    case 1:
      day = 'Monday'
      break;
    case 2:
      day = 'Wednesday'
      break;
    case 3:
      day = 'Wednesday'
      break;
    case 4:
      day = 'Friday'
      break;
    case 5:
      day = 'Friday'
      break;
    case 6:
      day = 'Monday'
      break;
    default:
      day = 'Monday'
  }

  return `The next stream is scheduled for ${day} at 8pm MDT`
}
