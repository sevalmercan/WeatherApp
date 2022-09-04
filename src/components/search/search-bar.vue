<template>
  <div class="input-and-button-container">
    <cv-text-input v-model="searchText" placeholder="Search"> </cv-text-input>
    <cv-button kind="secondary" @click="sendSearchInput"> Search </cv-button>
  </div>
</template>

<script>
import { CvButton, CvTextInput } from "@carbon/vue";
export default {
  data() {
    return {
      searchText: "",
    };
  },
  components: {
    CvButton,
    CvTextInput,
  },
  methods: {
    sendSearchInput() {
      this.$emit("clicked", this.searchText);
    },
  },
};
</script>

<style scoped>
.input-and-button-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
}
</style>
