const path = require('path');

module.exports = {
    entry:{
        about:'./src/pages/About/index.jsx',
        contact:'./src/pages/Contact/index.jsx',
        index:'./src/pages/HomePage/index.jsx',
        sign_In_Up: './src/pages/Sign-In-Up/index.jsx'
    },
    output:{
        path: path.resolve(__dirname,'../public/static/'),
        filename:'[name].js'
    },
    target:'web',
    name:'static-bundler',
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/i,
                use:['babel-loader'],
                exclude:/node_modules/
            },
            {
                test:/\.css$/i,
                use: [
                    'isomorphic-style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:1,
                            esModule:false,//esmodule doesn't work with isomorphic style loader
                            sourceMap:false,
                            import:true,
                            modules:{
                             localIdentName:'[local]__[hash:base64:5]'
                            }
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test:/\.(png|jpg|jpeg|gif|tif|ico)$/i,
                use:['url-loader']
            },
            {
                test:/\.svg/,
                use:['svg-url-loader']
            }
        ]
    },
    devServer: {
        compress:true,
        hot:true,
        index:'index.html',
        liveReload:true,
        contentBase: [
            path.join(__dirname, '../public'),
            path.join(__dirname, '../public/assets'),
            // path.join(__dirname,'../public/static')
        ],
        watchContentBase:true,
        historyApiFallback: true
    },
    resolve:{
        extensions:['*','.js','.jsx']
    }
}