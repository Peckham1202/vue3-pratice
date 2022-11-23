module.exports = {
  pages: {
    index: {
      entry: 'src/main.js'
    }
  },

  lintOnSave: false,

  devServer: {
    proxy: {
      '/api1': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/api1': '' }
      },

      '/api2': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/api2': '' }
      }
    }
  }
};
