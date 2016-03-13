
import path from 'path';
import webpack from 'webpack';

export default {
    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: [
                    path.resolve(__dirname, 'tests/spec'),
                    path.resolve(__dirname, 'src'),
                ],
                loader: 'babel',
                query: {
                    presets: [
                        'es2015',
                        'stage-0',
                    ],
                    plugins: [
                        'babel-plugin-add-module-exports',
                        'transform-es2015-modules-commonjs',
                        'transform-object-assign',
                    ],
                },
            }
        ]
    },

    resolve: {
        root: __dirname,
        alias: {
            'zap-base-dom-ready': 'src/index.js',
        },
        modulesDirectories: [
            'src',
            'node_modules',
        ],
    },

    resolveLoader: {
        root: __dirname,
        modulesDirectories: [
            'src',
            'node_modules',
        ],
    },
};
