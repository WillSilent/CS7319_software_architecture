const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/v1_0', {
      target: 'http://127.0.0.1:8080',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/v1_0": ""
      }
    })
  )
}