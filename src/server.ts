import timestampApi from './timestampApi'

const port = process.env.PORT || 8080

timestampApi.listen(port, () => {
  console.log(`Listening on ${port}`)
})
