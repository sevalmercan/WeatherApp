import axios from "axios";
import { weatherAppStore } from "@/components/helper/store";

export const weatherAppMixin = {
  data() {
    return {
      isWeatherDataExist: false,
      currentWeather: [],
      weeklyWeather: [],
      searchKey: "",
      lat: "",
      long: "",
    };
  },
  methods: {
    getCurrentWeatherData(latData, longData, tempType) {
      const path = "http://localhost:8000";
      axios
        .post(path, {
          city: this.searchKey,
          lat: latData,
          long: longData,
          temp: tempType,
        })
        .then((res) => {
          this.currentWeather = res.data.current_weather;
          this.weeklyWeather = res.data.weekly_weather;

          this.isWeatherDataExist =
            res.data.currentWeather?.cod !== "400" &&
            res.data.weeklyWeather?.cod !== "400";
        })
        .catch((error) => {
          console.error(error);
        });
    },
    findGeoCode() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude.toFixed(2);
        this.long = position.coords.longitude.toFixed(2);
        this.getCurrentWeatherData(this.lat, this.long, this.tempTypedeneme);
      });
    },

    getTempParam(tempType) {
      return tempType === "celsius" ? "metric" : "imperial";
    },
  },
  watch: {
    // Note: only simple paths. Expressions are not supported.
    tempTypedeneme(newValue) {
      this.getCurrentWeatherData(this.lat, this.long, newValue);
      // ...
    },
  },
  computed: {
    tempTypedeneme() {
      return this.getTempParam(weatherAppStore.tempType);
    },
  },
  mounted() {
    this.findGeoCode();
  },
};
