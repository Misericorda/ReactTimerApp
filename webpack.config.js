var webpack = require('webpack');
var path = require('path');


module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js', // !script to process the file via script loader
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        // root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Timer: 'app/components/Timer.jsx',
            Countdown: 'app/components/Countdown.jsx',
            Clock: 'app/components/Clock.jsx',
            CountdownForm: 'app/components/CountdownForm.jsx',
            Controls: 'app/components/Controls.jsx',
            applicationStyles: 'app/styles/app.scss',
        },
        modules: [
            __dirname,
            'node_modules'
        ],
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ["transform-class-properties"],
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,

            },
            {
                loader: 'sass-loader',
                test: /\.scss?$/,
                options: {
                    includePaths: [
                        path.resolve(__dirname, './node_modules/foundation-sites/scss'),
                    ]
                }

            },
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
