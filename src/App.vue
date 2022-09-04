<template>
  <div class="search-display-container">
    <search-bar @clicked="changeSearchKey"></search-bar>
    <weather-chart
      :currentWeatherData="currentWeather"
      :weeklyWeatherData="weeklyWeather"
      v-if="isWeatherDataExist"
    ></weather-chart>
    <div>
      {{ tempTypedeneme }}
    </div>
  </div>
</template>

<script>
import WeatherChart from "./components/weather-chart.vue";
import SearchBar from "@/components/search/search-bar";
import { weatherAppMixin } from "@/components/helper/weather-app-mixin";

export default {
  components: {
    WeatherChart,
    SearchBar,
  },
  mixins: [weatherAppMixin],
  methods: {
    changeSearchKey(searchText) {
      this.searchKey = searchText;
      this.getCurrentWeatherData(this.lat, this.long, this.tempTypedeneme);
    },
  },
};
</script>

<style>
.search-display-container {
  display: flex;
  flex-direction: column;
}
</style>
