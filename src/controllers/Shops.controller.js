const { resp } = require('../func');
const Shop = require('../models/Shop.model');

// -------------------------------------------------------------------------- //

exports.getAllShops = async (req, res) => {
  return resp(res, 200, 'Fetched Shops Successfully', {
    shops: await Shop.find()
  });
};