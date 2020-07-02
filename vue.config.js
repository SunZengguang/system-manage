module.exports = {
  // 配置启动端口和自动开启浏览器
  devServer: {
    port: 8081,
    open: true
    // proxy: {
    //     // 配置本地代理服务器，用于处理浏览器于服务器之间的跨域问题

    // }
  },
  // 配置css的全局变量
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/scss/_variable.scss";`
      }
    }
  }
}
