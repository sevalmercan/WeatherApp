<template>
  <div class="weather-details">
    <div class="weather-humidity">Humidity: {{ weatherDetailsData.humidity }}%</div>
    <div class="weather-wind">Wind: {{ weatherDetailsData.wind }} km/h</div>
    <div class="weather-pressure">Pressure: {{ weatherDetailsData.pressure }} kPa</div>
    <div class="weather-feels-like">Feels like: {{ weatherDetailsData.feelsLike }}°</div>
  </div>
</template>

<script>
export default {
  props: {
    weatherDetailsData: {},
  },
};
</script>

<style>
.weather-details {
  display: flex;
  flex-direction: column;
  margin-left: 33px;
  flex: 1;
}
div.weather-details > * {
  padding-right: 10px;
  margin-bottom: 10px;
  font-size: 8px;
}
</style>
