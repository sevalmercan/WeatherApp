<template>
  <div class="weekly-data-details-container">
    <div class="weather-status">{{ selectedColumnData.weatherStatus }}</div>
    <div
      v-for="(selectedColumn, index) in selectedColumnData.weatherTip"
      class="weather-tips"
      :key="index"
    >
      <div class="weather-tip-container">
        <div class="weather-tip-name">
          {{ selectedColumn.name }}
        </div>
        <div class="weather-tip-value">
          {{ selectedColumn.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedColumnData: {},
  },
};
</script>

<style>
.weekly-data-details-container {
  position: absolute;
  bottom: 20px;
  width: 90%;
  margin: 23px 15px 0 15px;
  font-size: 15px;
}
.weather-status {
  margin-bottom: 5px;
}
.weather-tip-container {
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.weather-tip-name {
  color: hsla(0, 0%, 100%, 0.6);
}

.weather-tip-value {
  color: #ffffff;
}
</style>
