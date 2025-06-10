const { getRouter } = require('stremio-addon-sdk');
const addonInterface = require('../server');

const router = getRouter(addonInterface);

module.exports = (req, res) => {
  router(req, res, (err) => {
    if (err) {
      console.error('Router error:', err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  });
};
