const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  // 本地
  app.use(createProxyMiddleware('/api', {
    target: 'http://localhost:8080',
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      '^/api': ''
    },
  }));
}
