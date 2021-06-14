const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  basePath: process.env.NEXT_PUBLIC_ENV_BASE_PATH,
  assetPrefix: isProd ? `${process.env.NEXT_PUBLIC_ENV_BASE_PATH}/` : '',
  publicRuntimeConfig: {
    basePath: process.env.NEXT_PUBLIC_ENV_BASE_PATH,
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
});
