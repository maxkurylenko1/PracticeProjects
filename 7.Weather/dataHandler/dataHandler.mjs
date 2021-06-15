/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
function getDatesForAWeek(timestampArr) {
  const result = [];
  for (let i = 0; i < timestampArr.length; i++) {
    let days = String(new Date(timestampArr[i] * 1000).getDate());
    let month = String(new Date(timestampArr[i] * 1000).getMonth() + 1);
    if (days.length < 2) {
      days = `0${days}`;
    }
    if (month.length < 2) {
      month = `0${month}`;
    }
    result.push(`${days}.${month}`);
  }
  return result;
}

function getMinTempForAWeek(minTempArr) {
  const result = [];

  for (let i = 0; i < minTempArr.length; i++) {
    const minTemp = String(Math.round(minTempArr[i]));

    result.push(`+${minTemp}`);
  }

  return result;
}

function getMaxTempForAWeek(maxTempArr) {
  const result = [];

  for (let i = 0; i < maxTempArr.length; i++) {
    const minTemp = String(Math.round(maxTempArr[i]));

    result.push(`+${minTemp}`);
  }

  return result;
}

function prepWeatherData(object) {
  const timeStamp = object.current.dt;
  const sunriseTimeSt = object.current.sunrise;
  const sunsetTimeSt = object.current.sunset;
  const forcast = [];
  const dateNow = {};
  const daysOfWeek = ['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.'];
  const daysOfMonth = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'ноября',
    'декабря',
  ];
  let timeNow = '';
  let sunriseTime = '';
  let sunsetTime = '';
  const date = new Date();
  const time = new Date(timeStamp * 1000);
  const sunriseDate = new Date(sunriseTimeSt * 1000);
  const sunsetDate = new Date(sunsetTimeSt * 1000);
  let minutesNow = String(time.getMinutes());
  let hoursNow = String(time.getHours());
  let sunriseHour = sunriseDate.getHours();
  let sunriseMinute = sunriseDate.getMinutes();
  let sunsetHour = sunsetDate.getHours();
  let sunsetMinute = sunsetDate.getMinutes();
  let month = date.getMonth();
  let dayOfWeek = date.getDay();
  const dayOfMonth = date.getDate();
  let pressure = object.current.pressure / 1000;
  const timestampArr = [];
  const maxTempArr = [];
  const minTempArr = [];

  for (let i = 0; i < object.daily.length - 1; i++) {
    maxTempArr.push(object.daily[i].temp.max);
  }

  const maxTemp = getMaxTempForAWeek(maxTempArr);

  for (let i = 0; i < object.daily.length - 1; i++) {
    minTempArr.push(object.daily[i].temp.min);
  }

  const minTemp = getMinTempForAWeek(minTempArr);

  for (let i = 0; i < object.daily.length - 1; i++) {
    timestampArr.push(object.daily[i].dt);
  }

  const daysOfMonthForAWeek = getDatesForAWeek(timestampArr);

  for (let i = 0; i < daysOfWeek.length; i++) {
    if (dayOfWeek === i) {
      dayOfWeek = daysOfWeek[i];
    }
  }

  for (let i = 0; i < daysOfMonth.length; i++) {
    if (month === i) {
      month = daysOfMonth[i];
    }
  }

  minutesNow = minutesNow.length < 2 ? (minutesNow = `0${minutesNow}`) : minutesNow;
  hoursNow = hoursNow.length < 2 ? (hoursNow = `0${hoursNow}`) : hoursNow;

  sunriseMinute = sunriseMinute.length < 2 ? (sunriseMinute = `0${sunriseMinute}`) : sunriseMinute;
  sunriseHour = sunriseHour.length < 2 ? (sunriseHour = `0${sunriseHour}`) : sunriseHour;

  sunsetMinute = sunsetMinute.length < 2 ? (sunsetMinute = `0${sunsetMinute}`) : sunsetMinute;
  sunsetHour = sunsetHour.length < 2 ? (sunsetHour = `0${sunsetHour}`) : sunsetHour;

  sunriseTime = `${sunriseHour}:${sunriseMinute}`;
  sunsetTime = `${sunsetHour}:${sunsetMinute}`;

  timeNow = `${hoursNow}:${minutesNow}`;

  pressure *= 760;

  dateNow.day_of_week = dayOfWeek;
  dateNow.day_of_month = dayOfMonth;
  dateNow.month = month;
  dateNow.time_now = timeNow;
  object.current.sunrise = sunriseTime;
  object.current.sunset = sunsetTime;
  object.current.pressure = pressure;

  forcast.push(dateNow);
  forcast.push(object.current);
  forcast.push(daysOfMonthForAWeek);
  forcast.push([minTemp, maxTemp]);

  return forcast;
}

function preapTableWeatherData(object) {
  const result = [];

  for (let i = 0; i < object.hourly.length; i++) {
    const time = new Date(object.hourly[i].dt * 1000).getHours();
    result.push(time);
  }

  return result;
}

export { prepWeatherData, preapTableWeatherData };
