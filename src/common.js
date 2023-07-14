const HOST = 'whitemouse.dev'

const PORT = process.env.PORT || 8080
const CHAT_PORT = process.env.CHAT_PORT || 8081
const MONGO_USER = process.env.MONGO_USER || 'kimkuns'
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'rlawldi98'
const MONGO_CLUSTER = process.env.MONGO_CLUSTER || 'cluster0.qtkzt.mongodb.net'
const MONGO_DBNAME = process.env.MONGO_DBNAME || 'WhiteMouse'
const GITHUB_ACEES_TOKEN = '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'

/* eslint-disable prefer-destructuring */

/** @type {string} */

// Naver OAuth

// @ts-nocheck
const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID
/** @type {string} */
// @ts-nocheck
const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET
const NAVER_REDIRECT_URI = `https://${HOST}/auth/naver/callback`

// KaKao OAuth

/** @type {string} */
// @ts-nocheck
const KAKAO_JAVASCRIPT_KEY = process.env.KAKAO_JAVASCRIPT_KEY
/** @type {string} */
// @ts-nocheck
const KAKAO_REST_KEY = process.env.KAKAO_REST_KEY
const KAKAO_REDIRECT_URI = `https://${HOST}/auth/kakao/callback`

const APP_CONFIG_JSON = JSON.stringify({
  HOST,
  PORT,
  CHAT_PORT,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_CLUSTER,
  MONGO_DBNAME,
  NAVER_CLIENT_ID,
  NAVER_REDIRECT_URI,
  KAKAO_JAVASCRIPT_KEY,
  KAKAO_REDIRECT_URI,
  KAKAO_REST_KEY,
}).replace(/"/g, '\\"')

module.exports = {
  HOST,
  PORT,
  CHAT_PORT,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_CLUSTER,
  MONGO_DBNAME,
  APP_CONFIG_JSON,
  NAVER_CLIENT_ID,
  NAVER_REDIRECT_URI,
  KAKAO_JAVASCRIPT_KEY,
  KAKAO_REDIRECT_URI,
  KAKAO_REST_KEY,
}
