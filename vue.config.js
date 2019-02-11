// Vue CLI uses http-proxy-middleware (https://github.com/chimurai/http-proxy-middleware#options)
// These are the options that worked for me. YMMV.
module.exports = {
    devServer: {
        proxy: {
            '^/': {
                target: 'https://api-v3.igdb.com/',
                ws: false,
                changeOrigin: true
            }
        }
    }
}
