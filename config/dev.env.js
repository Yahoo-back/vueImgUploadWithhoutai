var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  // BASE_API: '"http://47.96.101.223:8003"',//本地域名
  BASE_API: '"http://localhost:8003"',
})
