var path = require('path');

module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'), //输出文件的绝对路径
        filename: '[name].js',
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            components: path.join(__dirname, 'components'),
            utils: path.join(__dirname, 'utils')
        }
    },
    devServer: {
        contentBase: "./",
        host: '127.0.0.1',
        port: 8088,
        inline: true,
        compress: true
    },
    module: {
        rules: [{
            test: /\.(jsx|js)?$/,
            exclude: /node_modules/,
            use: 'babel-loader',

        }, {
            test: /\.(scss|sass|css|less)?$/,
            use: ['style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};