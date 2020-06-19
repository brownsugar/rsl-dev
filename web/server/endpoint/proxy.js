import axios from 'axios'
import config from 'config'

export default async function (req, res, next) {
  const url = config.api.url + req.originalUrl
  const { headers, data } = await axios.get(url)
  return res.set(headers).end(data)
}
