const path = require('path')

// next.config.js
module.exports = {
    reactStrictMode: true,

    sassOptions: {
        includePaths: [
            path.join(__dirname, 'styles'),
            path.join(__dirname, 'node_modules'),
        ],
    },
}
