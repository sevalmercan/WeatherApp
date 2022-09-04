<template>
  <div>
    <div ref="echart" class="echart">
      <slot></slot>
    </div>
    <div class="weekly-data-info-container">
      <slot name="weatherDetails" :data="selectedColumnData"> </slot>
    </div>
  </div>
</template>
<script>
import {
  calculateSelectedColumn,
  handleWeatherDetailsData,
  initChart,
} from "../../helper/weekly-weather-helper";

export default {
  props: {
    echartData: [],
    echartDataTemp: {},
    chartName: String,
  },
  data() {
    return {
      numberOfDaysOnCanvas: 5,
      selectedColumn: 0,
      selectedColumnData: Number,
    };
  },

  mounted() {
    const highlightWidth = Math.floor(
      this.$refs.echart.clientWidth / this.numberOfDaysOnCanvas
    );

    let dailyChart = initChart(
      this.$scopedSlots.default()[0].context.$refs.chartCanvas
    );

    this.$watch(
      "echartData",
      function () {
        const ref = this;
        ref.selectedColumnData = this.echartDataTemp.selectedColumnData;

        let option = this.echartDataTemp.option;

        dailyChart.setOption(option);
        dailyChart.getZr().on("click", function (params) {
          this.selectedColumn = calculateSelectedColumn(
            params.offsetX,
            highlightWidth
          );

          if (ref.chartName === "daily") {
            ref.selectedColumnData = handleWeatherDetailsData(
              ref.echartData.list[this.selectedColumn - 1]
            );
          }
        });
      },
      { immediate: true }
    );
  },
};
</script>
<style>
.echart {
  overflow-x: auto;
  overflow-y: hidden;
}
.weekly-data-info-container {
  width: 100%;
  height: 6vh;
}
</style>
