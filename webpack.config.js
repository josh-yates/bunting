const path = require('path');
const ROOT = path.resolve( __dirname, './' );
const DESTINATION = path.resolve( __dirname, 'dist' );

module.exports = {
    context: ROOT,
    entry: './index.ts',
    output: {
        filename: '[name].bundle.js',
        path: DESTINATION
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                use: 'ts-loader'
            }
        ]
    }
};