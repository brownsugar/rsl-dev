import MobileDetect from 'mobile-detect'

export default ({ req }, inject) => {
  const userAgent = process.server ? req.headers['user-agent'] : window.navigator.userAgent
  const md = new MobileDetect(userAgent)
  inject('md', md)
}
