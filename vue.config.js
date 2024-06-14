const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'publicFiles',
  outputDir: path.resolve(__dirname, 'public'),
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'publicFiles'),
    },
  },
})
