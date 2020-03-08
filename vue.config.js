const CompressionPlugin = require('compression-webpack-plugin');

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
      },
      '/kkVirusCount': {
        target: 'https://api.m.sm.cn',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/kkVirusCount': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [new CompressionPlugin({
          test: /\.js$|\.html$|\.css/,
          threshold: 10240,
          deleteOriginalAssets: false
        })]
      }
    }
  }
}