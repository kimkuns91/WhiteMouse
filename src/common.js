const HOST = process.env.HOST || 'localhost:3000'
const PORT = process.env.PORT || 3000
const MONGO_USER = process.env.MONGO_USER || 'kimkuns'
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'rlawldi98'
const MONGO_CLUSTER = process.env.MONGO_CLUSTER || 'cluster0.qtkzt.mongodb.net'
const MONGO_DBNAME = process.env.MONGO_DBNAME || 'WhiteMouse'
/* eslint-disable prefer-destructuring */

const APP_CONFIG_JSON = JSON.stringify({
  HOST,
  PORT,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_CLUSTER,
  MONGO_DBNAME,
}).replace(/"/g, '\\"')

module.exports = {
  HOST,
  PORT,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_CLUSTER,
  MONGO_DBNAME,
  APP_CONFIG_JSON,
}
