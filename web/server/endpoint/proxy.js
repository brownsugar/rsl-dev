import axios from 'axios'
import config from 'config'

export default async function (req, res, next) {
  const url = config.api.url + req.originalUrl
  const { headers, data } = await axios.get(url)
  Object.keys(headers).forEach((key) => {
    res.setHeader(key, headers[key])
  })
  return res.end(data)
}
