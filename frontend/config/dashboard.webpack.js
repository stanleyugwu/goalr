module.exports = {
    name:'dashboard-bundler',
    module:{
        rules:[
            {
                test:/\.js$/i,
                use:['babel-loader'],
                exclude:/node_modules/
            },
            {
                test:/\.css$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
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
    plugins:[
        new HtmlWebpackPlugin({
           template:path.resolve(__dirname,'src','index.html'),
           inject:'body',
        }),
        new MiniCssExtractPlugin({
            filename:'bundle.css',
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        watchContentBase:true,
        historyApiFallback: true
    }
}