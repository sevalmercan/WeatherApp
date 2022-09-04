<template>
  <div>
    <div class="weather-pc">
      <div class="weather-card-container">
        <current-weather :weatherData="currentWeatherData"></current-weather>
        <div class="weekly-hourly-weather-container">
          <daily-hourly-toggle @clicked="onToogleClicked" />
          <keep-alive>
            <component
              :is="currentComponent"
              :weeklyWeather="weeklyWeatherData"
            />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CurrentWeather from "./currentWeather/current-weather.vue";
import DailyWeather from "@/components/dailyWeather/daily-weather";
import HourlyWeather from "./dailyWeather/hourly-weather";
import DailyHourlyToggle from "@/components/dailyWeather/daily-hourly-toggle";
export default {
  data() {
    return {
      selectedClass: "daily",
    };
  },
  props: {
    currentWeatherData: [],
    weeklyWeatherData: [],
  },
  components: {
    CurrentWeather,
    DailyWeather,
    HourlyWeather,
    DailyHourlyToggle,
  },
  methods: {
    onToogleClicked(selectedClass) {
      this.selectedClass = selectedClass;
    },
  },
  computed: {
    currentComponent() {
      return this.selectedClass + "-weather";
    },
  },
};
</script>

<style>
.weather-pc {
  display: flex;
  width: 100%;
}
.weather-card-container {
  background: url(https://search-img-dre.dbankcdn.com/tmp/upload/weather_logo/7_new_background_cloudy.jpg);
  background-blend-mode: multiply;
  background-size: 100% 100% !important;
  background-color: rgba(11, 25, 48, 0.4) !important;
  background-repeat: no-repeat !important;
  display: flex;
  width: 100%;
  border-radius: 12px;
  border: 1px black solid;
  padding: 32px 20px 0;
  color: white;
  font-family: Arial, sans-serif;
  flex-direction: column;
  overflow: hidden;
}

.weekly-hourly-weather-container {
  background: inherit;
  border-radius: 16px;
  padding-top: 8px;
  padding-bottom: 16px;
  position: relative;
  z-index: 0;
}
.weekly-hourly-weather-container::before {
  position: absolute;
  border-radius: inherit;
  background: #00000033;
  content: "";
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: -1;
}
</style>
