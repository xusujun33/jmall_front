<template>
  <v-carousel
    height="480px"
    cycle
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(item, i) in banners" :key="i">
      <div class="img-box">
        <v-img class="img1 " v-if="item.picUrl" :src="item.picUrl"></v-img>
        <v-img class="img2" v-if="item.picUrl2" :src="item.picUrl2"></v-img>
        <v-img class="img3" v-if="item.picUrl3" :src="item.picUrl3"></v-img>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousels",
  props: {
    banners: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.img-box {
  .img1,
  .img2,
  .img3 {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>