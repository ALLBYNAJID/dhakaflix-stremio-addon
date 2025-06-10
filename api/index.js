// api/index.js
const { getRouter } = require('stremio-addon-sdk');
const addonInterface = require('../../server');  // Adjust path if necessary

const router = getRouter(addonInterface);

module.exports = (req, res) => {
  router(req, res);
};
