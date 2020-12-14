<template>
  <v-card  min-height="400"  hover>
    <div class="product-card">
      <v-img :src="url" width="300" height="210"></v-img>
      <div>
        <v-card-title class="product-title">{{ title }}</v-card-title>
        <v-card-subtitle class="product-title">
          {{ subtitle }}
        </v-card-subtitle>
      </div>
      <div class="product-price">￥ {{ price }}</div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "CardProduct",
  data(){
      return{
          flat:true
      }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.product-card {
  padding: 24px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .product-title {
    display: flex;
    justify-content: center;
  }
  .product-price {
    color: red;
    font-weight: bold;
    font-size: 18px;
  }
}
</style>  
