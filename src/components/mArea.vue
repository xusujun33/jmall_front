<template>
  <div class="area">
    <v-card class="area-title-box rounded-b-0" elevation="1" outlined>
      <v-card-title class="area-title">
        {{ title }}
      </v-card-title>
    </v-card>
    <div>
      <slot name="hot-product"></slot>

      <slot name="other-product">
        <slot name="first-product"></slot>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MArea",
  props: {
    title: {
      type: String,
      required: true,
      default: "分类产品",
    },
  },
};
</script>

<style lang="less" scoped>
.area-title-box {
  background-color: #f8f8f8;
  color: rgb(48, 47, 47);
  .area-title {
    font-size: 18px;
    margin-left: 10px;
  }
}
</style>