var express = require('express');
var router = express.Router();
const axios = require('axios');

//This must be in env.
const key = '6ca9a3502c7c4df0be2133230231906';

/* GET weather listing. */
router.get('/', async function (req, res, next) {
  const cities = req.query.cities.split(',');
  try {
    const citiesPromises = cities.map((city) => {
      return axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`);
    })
    const citiesData = await Promise.all(citiesPromises);
    const result = []
    for (let cityData of citiesData) {
      result.push(cityData.data)
    }
    return res.status(200).json(result);
  } catch (err) {
    return err;
  }
});


router.get('/forecast', async (req, res) => {
  const { city, days } = req.query;
  try {
    const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=${days}&aqi=no&alerts=no`);
    return res.status(200).json(data.forecast);
  } catch (err) {
    return err;
  }
})

router.get("/current", async (req, res)=>{
  const { city } = req.query;
  try {
  const { data } = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`);
  console.log(data);
  return res.status(200).json(data.current);
  } catch(err) {
    return err;
  } 

})

module.exports = router;
