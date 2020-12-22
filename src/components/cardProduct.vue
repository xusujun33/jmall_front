<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      height="400"
      :class="{ hoverClass: hover }"
      class="transition-swing rounded-0"
      outlined
    >
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
        <div v-if="show">
          <v-card-title class="product-title text-center">{{
            title
          }}</v-card-title>
          <v-card-subtitle class="product-subtitle grey--text text-caption">
            {{ subtitle }}
          </v-card-subtitle>
        </div>
        <div v-if="show" class="product-price" v-show="!hover">
          ￥ {{ price }}
        </div>
        <div v-if="show" class="btn-group" v-show="hover">
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
    show: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    url: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
  },
};
</script>

<style lang="less" scoped>
.hoverClass {
  box-shadow:inset 0px 0px 10px  #c2c2c2;
}

.product-card {
  padding: 24px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .product-title {
    display: flex;
    justify-content: center;
    font-size: 16px;
  }

  .product-subtitle {
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