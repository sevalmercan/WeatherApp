<template>
  <div class="daily-hourly-toggle">
    <div
      v-for="tab in tabs"
      :key="tab"
      @click="sendActiveClass(tab)"
      :class="['daily-hourly-toggle', { active: currentTab === tab }]"
    >
      {{ tab }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ["Daily", "Hourly"],
      currentTab: "Daily",
    };
  },
  methods: {
    sendActiveClass: function (selectedClass) {
      this.currentTab = selectedClass;
      this.$emit("clicked", this.currentTab.toLocaleLowerCase());
    },
  },
};
</script>

<style scoped>
.daily-hourly-toggle {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-left: 10px;
  color: hsla(0, 0%, 100%, 0.6);
}

.daily-hourly-toggle.active {
  color: white;
}
</style>
