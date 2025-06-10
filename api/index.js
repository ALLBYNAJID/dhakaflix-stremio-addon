const { getRouter } = require('stremio-addon-sdk');
const addonInterface = require('../server');  // one level up, root folder

const router = getRouter(addonInterface);

module.exports = (req, res) => {
  router(req, res);
};
