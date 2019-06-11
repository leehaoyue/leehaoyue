module.exports = {
  plugins: {
    autoprefixer: {}
  },
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
