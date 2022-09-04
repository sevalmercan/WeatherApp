<template>
  <e-chart
    :echartData="weeklyWeather"
    :echartDataTemp="handleEchartProp"
    chartName="daily"
  >
    <div id="chartCanvas" ref="chartCanvas"></div>
    <template #weatherDetails="prop">
      <daily-weather-details :selectedColumnData="prop.data"
    /></template>
  </e-chart>
</template>

<script>
import EChart from "./chart/e-chart";
import {
  getOption,
  getSeriesForDailyChart,
  handleMorningAndEveningData,
  handleWeatherDetailsData,
  xAxisData,
} from "@/components/helper/weekly-weather-helper";
import DailyWeatherDetails from "@/components/dailyWeather/daily-weather-details";

export default {
  components: {
    DailyWeatherDetails,
    EChart,
  },
  props: {
    weeklyWeather: {},
  },
  computed: {
    handleEchartProp: function () {
      let chartDataTemp = {};
      chartDataTemp.morningAndEveningData = handleMorningAndEveningData(
        this.weeklyWeather.list
      );

      chartDataTemp.selectedColumnData = handleWeatherDetailsData(
        this.weeklyWeather.list[0]
      );
      let dataset = [];
      chartDataTemp.option = getOption(
        xAxisData,
        getSeriesForDailyChart(dataset, chartDataTemp.morningAndEveningData)
      );
      chartDataTemp.chartData = this.weeklyWeather.list;
      chartDataTemp.columnNumber = 7;
      return chartDataTemp;
    },
  },
};
</script>

<style scoped>
#chartCanvas {
  width: calc(((100% / 5) * 7) - 15px);
  height: 250px;
}
</style>
