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

  it('returns the expected error message for an invalid date', async () => {
    const { body: { error } } = await request(timestampApi).get('/api/timestamp/this-is-not-a-date')
    expect(error.toLowerCase()).toEqual('invalid date')
  })

  it('treats empty date parameter as current time', async () => {
    jest.spyOn(Date, 'now').mockImplementation(() => expected.unix)
    const { body } = await request(timestampApi).get('/api/timestamp')
    expect(body).toEqual(expected)
  })
})
