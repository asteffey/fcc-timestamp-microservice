import express from 'express'
import parseDate from './parseDate'

const timestampApi = express()

interface Timestamp {
  unix: number,
  utc: string
}

function toTimestamp (date: Date): Timestamp {
  return {
    unix: date.getTime(),
    utc: date.toUTCString()
  }
}

timestampApi.get('/api/timestamp/:value(\\d+)', ({ params: { value } }, res) => {
  const date = parseDate(Number(value))
  res.json(toTimestamp(date))
})

timestampApi.get('/api/timestamp/:value', ({ params: { value } }, res) => {
  const date = parseDate(value)
  res.json(toTimestamp(date))
})

export default timestampApi
