<template>
  <v-hover v-slot:default="{ hover }">
    <v-card min-height="400" hover>
      <div class="product-card">
        <v-img :src="url" :lazy-src="url" width="200" height="200">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <div>
          <v-card-title class="product-title">{{ title }}</v-card-title>
          <v-card-subtitle class="product-title">
            {{ subtitle }}
          </v-card-subtitle>
        </div>
        <div class="product-price" v-show="!hover">￥ {{ price }}</div>
        <div class="btn-group" v-show="hover">
          <v-btn depressed outlined small text width="100">查看详情</v-btn>
          <v-btn depressed small dark width="100" class="indigo"
            >加入购物车</v-btn
          >
        </div>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "CardProduct",
  data() {
    return {};
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
  .btn-group {
    display: flex;
    justify-content: space-between;
    width: 220px;
  }
}
</style>  
