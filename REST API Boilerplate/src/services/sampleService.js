const axios = require('axios');

const fetchWeather = async (city) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await axios.get(url);
  return response.data;
};

const fetchCryptoPrice = async (coin) => {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`;
  const response = await axios.get(url);
  return response.data;
};

module.exports = { fetchWeather, fetchCryptoPrice };
