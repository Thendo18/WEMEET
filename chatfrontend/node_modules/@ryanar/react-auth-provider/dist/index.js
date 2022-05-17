
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-auth-provider.cjs.production.min.js')
} else {
  module.exports = require('./react-auth-provider.cjs.development.js')
}
