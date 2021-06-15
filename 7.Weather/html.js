/* eslint-disable operator-linebreak */
/* eslint-disable import/extensions */
import express from 'express';
import { sendReqApi } from './API/requestAPI.js';
import { prepWeatherData, preapTableWeatherData } from './dataHandler/dataHandler.mjs';

const requestURL =
  'https://api.openweathermap.org/data/2.5/onecall?lat=46.650159&lon=32.622123&units=metric&appid=c33b58365581773ab51e3527e08e0243';
const app = express();
const port = 8000;
const host = 'localhost';

app.get('/weatherforcast2', async (req, res) => {
  const unprepData = await sendReqApi(requestURL)
    .then((data) => preapTableWeatherData(data))
    .then((data) => JSON.stringify(data));

  res.send(unprepData);
});

app.get('/weatherforcast', async (req, res) => {
  const unprepData = await sendReqApi(requestURL)
    .then((unprData) => prepWeatherData(unprData))
    .then((data) => JSON.stringify(data));
  res.send(unprepData);
});

app.use(express.static('public'));

app.listen(port, host, console.log(`App listening on adress: ${host}:${port}`));
