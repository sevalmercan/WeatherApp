<template>
  <e-chart
    :echartData="weeklyWeather"
    :echartDataTemp="chartDataTemp"
    chartName="hourly"
  >
    <div id="chartCanvas" ref="chartCanvas"></div>
  </e-chart>
</template>

<script>
import EChart from "./chart/e-chart";
import {
  getOption,
  getSeriesForHourlyChart,
  hourlyxAxisData,
} from "@/components/helper/weekly-weather-helper";
import Vue from "vue";

export default {
  components: {
    EChart,
  },
  props: {
    weeklyWeather: {},
  },
  data() {
    return {
      chartDataTemp: {
        columnNumber: 12,
      },
    };
  },
  created() {
    let dataset = [];
    Vue.set(
      this.chartDataTemp,
      "option",
      getOption(hourlyxAxisData, getSeriesForHourlyChart(dataset))
    );
  },
};
</script>

<style scoped>
#chartCanvas {
  width: calc(((100% / 5) * 12) - 15px);
  height: 250px;
}
</style>
