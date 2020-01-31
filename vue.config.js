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
        target: '<url>',
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
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
}