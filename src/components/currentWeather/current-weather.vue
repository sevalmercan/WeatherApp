<template>
  <div class="current-weather-container">
    <div class="weather-temprature">
      <weather-number
        :weatherNumberData="weatherNumberComponentData"
      ></weather-number>
      <weather-details
        :weatherDetailsData="weatherDetailsComponentData"
      ></weather-details>
    </div>
  </div>
</template>

<script>
import WeatherDetails from "./weather-details.vue";
import WeatherNumber from "./weather-number.vue";
import {
  getWeatherNumberData,
  getWeatherDetailsData,
} from "../helper/current-weather-helper";

export default {
  props: {
    weatherData: [],
  },
  components: {
    WeatherDetails,
    WeatherNumber,
  },
  methods: {
    getWeatherNumberData,
    getWeatherDetailsData,
  },
  computed: {
    weatherNumberComponentData: function () {
      return getWeatherNumberData(this.weatherData);
    },
    weatherDetailsComponentData: function () {
      return this.getWeatherDetailsData(this.weatherData);
    },
  },
};
</script>

<style>
.current-weather-container {
  display: block;
  padding-bottom: 22px;
  width: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.weather-temprature {
  display: flex;
  justify-content: space-between;
}
</style>
