const { Nuxt, Builder } = require('nuxt')
const express = require('express')
const consola = require('consola')
const compression = require('compression')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
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
