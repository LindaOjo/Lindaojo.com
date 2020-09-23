module.exports = {
    mode: 'production',
    entry: {
        app: './src/main.js',
    },
    devServer: {
        contentBase: './dist',
    },
    output: {
        filename: 'main.js'
    }
}