import request from 'supertest'
import timestampApi from './timestampApi'

describe('timestamp api', () => {
  const date = '2016-12-25'
  const expected = {
    unix: 1482624000000,
    utc: 'Sun, 25 Dec 2016 00:00:00 GMT'
  }

  it('handles a valid date string', async () => {
    const { body } = await request(timestampApi).get(`/api/timestamp/${date}`)
    expect(body).toEqual(expected)
  })

  it('handles a valid unix timestamp', async () => {
    const { body } = await request(timestampApi).get(`/api/timestamp/${expected.unix}`)
    expect(body).toEqual(expected)
  })
})
