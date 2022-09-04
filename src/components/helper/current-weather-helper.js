export const handleBackgroundAndWeatherType = (weatherType) => {
  return weatherBackground.find((weather) => weather.type === weatherType);
};

export const getWeatherNumberData = (newWeatherData) => {
  return {
    temp: Math.floor(newWeatherData.main.temp),
    weather: newWeatherData.weather[0].main,
    dt: newWeatherData.dt,
    timezone: newWeatherData.timezone,
  };
};

export const getWeatherDetailsData = (newWeatherData) => {
  return {
    humidity: newWeatherData.main.humidity,
    wind: newWeatherData.wind.speed,
    pressure: newWeatherData.main.pressure,
    feelsLike: Math.floor(newWeatherData.main.feels_like),
  };
};

export const weatherBackground = [
  {
    type: "Clouds",
    weatherName: "Cloudy",
    background:
      "https://search-img-dre.dbankcdn.com/tmp/upload/weather_logo/7_new_icon_cloudy.png",
  },
  {
    type: "Sunny",
    weatherName: "Sunny",
    background: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  },

  {
    type: "Clear",
    weatherName: "Clear",
    background:
      "https://search-img-dre.dbankcdn.com/tmp/upload/weather_logo/6_new_background_mostly_cloudy.jpg",
  },
  {
    type: "Rain",
    weatherName: "Rain",
    background:
      "https://search-img-dre.dbankcdn.com/tmp/upload/weather_logo/6_new_background_mostly_cloudy.jpg",
  },
];

export const getDateAndTime = (dt, timezone) => {
  const fullDate = new Date(dt * 1000 - timezone * 1000);
  const weekDay = fullDate.toLocaleString("en-us", { weekday: "long" });
  const day = fullDate.getDay();
  const month = fullDate.toLocaleString("default", { month: "long" });

  return `${weekDay}, ${month} ${day}`;
};
