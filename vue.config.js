const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = defineConfig({
    transpileDependencies: true
})

module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        //发布模式
        config.when(process.env.NODE_ENV === 'production', config => {
                //entry找到默认的打包入口，调用clear则是删除默认的打包入口
                //add添加新的打包入口
                config.entry('app').clear().add('./src/main-prod.js')
                    //将node_modules中的依赖项不打包，采用CDN外链的形式
                config.set('externals', {
                    vue: 'Vue',
                    // 'vue-router': 'VueRouter',
                    axios: 'axios',
                    // vuex: 'Vuex'
                })

                //使用插件
                config.plugin('html').tap(args => {
                    //添加参数isProd
                    args[0].isProd = true
                    return args
                })
                config.plugin('provide').use(webpack.ProvidePlugin, [{
                    'window.Quill': 'quill'
                }]);

            })
            //开发模式
        config.when(process.env.NODE_ENV === 'development', config => {
            config.entry('app').clear().add('./src/main-dev.js')

            //使用插件
            config.plugin('html').tap(args => {
                    //添加参数isProd
                    args[0].isProd = false
                    return args
                })
                //quill插件
            config.plugin('provide').use(webpack.ProvidePlugin, [{
                'window.Quill': 'quill'
            }]);

        })
    }

}