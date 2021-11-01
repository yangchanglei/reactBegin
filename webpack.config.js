const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/index.tsx',
    output:{
        path: path.resolve(__dirname,'dist'),
        library: 'IReact', //我们的库的名字，如果不写别人是用不了我们的库的
        //libraryTarget: 'umd', //我们的库的输出格式，默认写umd
        filename:'bundle.js'
    },
    module: {
        rules:[
            {
                test:/\.tsx?$/,
                loader:'awesome-typescript-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'src/index.html')
        })
    ],
    resolve: {
        modules: [ 'node_modules' ],
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: 'source-map',
    //启动指令 webpack-dev-server
    devServer: {
        static: { // static: ['assets']
            directory: path.join(__dirname, 'src')
        },
        //contentBase: path.resolve(__dirname, "dist"), 已经移除
        compress: true,
        port: 9000
    },
    mode: 'development'
}