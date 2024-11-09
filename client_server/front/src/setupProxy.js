const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/v1_0', {
      target: 'http://3.83.126.203',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/v1_0": ""
      }
    })
  )
}