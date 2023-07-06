const HOST = process.env.HOST || 'localhost:5000'

const PORT = process.env.PORT || 3000

/* eslint-disable prefer-destructuring */

const APP_CONFIG_JSON = JSON.stringify({
  HOST,
  PORT
}).replace(/"/g, '\\"')

module.exports = {
  HOST,
  PORT,
  APP_CONFIG_JSON,
}
