<template>
  <div class="weather-number">
    <div class="card-weather-number">
      <div class="weather-numeric-number">{{ weatherNumberData.temp }}</div>
      <div class="weather-unit">
        <div
          class="temp-celcius"
          @click="changeTempType('celsius')"
          :class="{ activeToogle: isCelsiusActive }"
        >
          °C
        </div>
        <div class="temp-line"></div>
        <div
          class="temp-fahrenheit"
          @click="changeTempType('fahrenheit')"
          :class="{ activeToogle: !isCelsiusActive }"
        >
          °F
        </div>
      </div>
    </div>
    <div class="card-weather-wind">
      {{ localDateAndTime }} {{ weatherInfo.weatherName }}
    </div>
  </div>
</template>

<script>
import {
  handleBackgroundAndWeatherType,
  getDateAndTime,
} from "../helper/current-weather-helper";
import { weatherAppStore } from "@/components/helper/store";
export default {
  data() {
    return {
      isCelsiusActive: true,
    };
  },
  props: {
    weatherNumberData: {},
  },
  methods: {
    handleBackgroundAndWeatherType,
    getDateAndTime,
    changeTempType: function (type) {
      this.isCelsiusActive = type === "celsius";
      weatherAppStore.tempType = type;
    },
  },

  computed: {
    weatherInfo: function () {
      return this.handleBackgroundAndWeatherType(
        this.weatherNumberData.weather
      );
    },
    localDateAndTime: function () {
      return this.getDateAndTime(
        this.weatherNumberData.dt,
        this.weatherNumberData.timezone
      );
    },
  },
};
</script>

<style scoped>
.weather-number {
  display: flex;
  flex-direction: column;
  flex: 1.2;
}

.card-weather-number {
  display: flex;
  flex-direction: row;
}

.weather-numeric-number {
  font-size: 75px;
  margin-left: 12px;
  line-height: 72px;
}

.card-weather-wind {
  font-size: 10px;
  line-height: 16px;
  display: flex;
  justify-content: end;
  color: hsla(0, 0%, 100%, 0.6);
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  word-break: break-all;
}

.weather-unit {
  font-size: 14px;
  direction: ltr;
  margin-top: 32px;
  margin-left: 4px;
  display: flex;

  color: hsla(0, 0%, 100%, 0.6);
}
.temp-line {
  width: 1px;
  height: 10px;
  background: hsla(0, 0%, 100%, 0.4);
  margin: 3px 8px 0;
}
.activeToogle {
  color: white;
}
</style>
