const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './server.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('./build'),
    filename: 'server.bundle.js'
  },

  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        use:['babel-loader']
      },
      {
        test:/\.(png|jpg|jpeg|gif|tif|ico)$/i,
        use:['url-loader']
      },
      {
        test:/\.css$/i,
        use: ['isomorphic-style-loader',
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
         }
        ]
      },
      {
        test:/\.svg$/i,
        use:['svg-url-loader']
      }
    ]
  },
  plugins:[
    // new MiniCssExtractPlugin({
    //     filename:'../../frontend/public/assets/bundle.css'
    // })
  ],

  resolve:{
    extensions:['*','.js','.jsx']
  }
};