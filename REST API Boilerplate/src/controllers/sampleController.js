const { fetchWeather, fetchCryptoPrice } = require('../services/sampleService');

const getWeather = async (req, res, next) => {
  try {
    const city = req.query.city || 'London';
    const data = await fetchWeather(city);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getCryptoPrice = async (req, res, next) => {
  try {
    const coin = req.query.coin || 'bitcoin'; // default to Bitcoin
    const data = await fetchCryptoPrice(coin);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = { getWeather, getCryptoPrice };
