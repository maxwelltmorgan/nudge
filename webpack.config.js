const path = require('path');

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist')
    }
};
