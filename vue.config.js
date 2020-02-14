module.exports = {
  publicPath: './',
  outputDir: 'dist',
  filenameHashing: true,
  lintOnSave: true,
  runtimeCompiler: false,
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/crossDomain': {
        target: 'http://111.229.218.238:8081',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/crossDomain': ''
        }
      },
      '/wyVirusNews': {
        target: 'https://news.163.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/wyVirusNews': ''
        }
      },
      '/wyVirusCount': {
        target: 'https://c.m.163.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/wyVirusCount': ''
        }
      },
      '/wjwVirusCount': {
        target: 'https://ncov.html5.qq.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/wjwVirusCount': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
}