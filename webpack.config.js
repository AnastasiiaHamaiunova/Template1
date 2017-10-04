const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    output: {
        filename: 'index.min.js',
        path: __dirname + '/dist'
    },
    entry: ['./js/index.js'],
    module: {
        rules: [
              {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
                })
              },              
              {
                test: /\.(gif|jpe?g|png|svg)(\?.*)?$/,
                use: [
                  'file-loader?name=images/[hash].[ext]',
                  {
                    loader: 'image-webpack-loader',
                    options: {}
                  }
                ]
              }
        ]                    
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ] 
}