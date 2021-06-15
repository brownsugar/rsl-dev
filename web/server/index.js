import { Nuxt, Builder } from 'nuxt'
import express from 'express'
import consola from 'consola'
import compression from 'compression'
import config from '../nuxt.config'

// Import and Set Nuxt.js options
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  const app = express()

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    app.use(compression())
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  const { host, port } = nuxt.options.server

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
