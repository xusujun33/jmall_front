<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      show-arrows="false"
      cycle
      hide-delimiter-background
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import img1 from '../assets/5bdebb41e11f4.jpg'
import img2 from '../assets/5bdebbd45a0b0.jpg'
import img3 from '../assets/Ccdiid.png'
export default {
  name: "Carousels",
  data() {
    return {
      items: [
        {
          src: img1,
        },
        {
          src: img2,
        },
        {
          src:img3
        }
      ],
    };
  },
};
</script>

<style>
</style>