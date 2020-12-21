<template>
  <div>
    <v-row class="flex-column">
      <div class="text-subtitle-2 mb-4">{{ title }}</div>
      <div class="text-body-2 mb-1">{{ subTitle1 }}</div>
      <div class="text-body-2 mb-1">{{ subTitle2 }}</div>
      <div class="text-body-2">{{ subTitle3 }}</div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
    },
    subTitle1: {
      type: String,
    },
    subTitle2: {
      type: String,
    },
    subTitle3: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
</style>