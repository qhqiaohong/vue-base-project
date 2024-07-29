module.exports = {
  lintOnSave: false,
  assetsDir: 'static',
  publicPath: "/",
  outputDir: 'dist',
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: 80,
    // https: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        // 本地环境
        // target: 'http://192.168.0.41:8080',
        // 服务器环境（测试）
        //target: 'http://119.29.163.98:8080',
        // 服务器环境（生产）
        target: 'http://1.82.219.241:8080',
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      },
      // 金融产品相关
      "/open-API": {
        
        target: "https://qyyd.shanqitong.com/servicePath/",//正式
       // target: "https://shanxi-sqt-dev-gov-ex.yscredit.com/servicePath",//测试
        changeOrigin: true,
        pathRewrite: {
          '^/open-API' : ''
        }
      },

   
    },
  },
}
