<template>
  <div class="home">
    <v-container class="home-container">
      <v-row class="justify-center">
        <v-col>
          <!-- 轮播图 -->
          <carousels :banners="banners" class="rounded-lg"></carousels>
          <div v-for="(item, i) in homeList" :key="i" class="my-10">
            <!-- 活动版块 -->
            <div v-if="item.type === 1">
              <v-row no-gutters>
                <v-hover
                  v-slot:default="{ hover }"
                  v-for="(card, i) in item.panelContents"
                  :key="i"
                >
                  <v-col cols="3">
                    <v-img
                      :class="[`elevation-${hover ? 12 : 0}`, rounded(i)]"
                      :src="card.picUrl"
                      class="transition-swing"
                    ></v-img>
                  </v-col>
                </v-hover>
              </v-row>
            </div>
            <!-- 热门商品-->
            <div v-if="item.type === 2">
              <m-area :title="item.name">
                <v-row slot="hot-product" no-gutters>
                  <v-col
                    v-for="product in item.panelContents"
                    :key="product.id"
                  >
                    <card-product
                      :url="product.picUrl"
                      :title="product.productName"
                      :subtitle="product.subTitle"
                      :price="product.salePrice"
                    ></card-product>
                  </v-col>
                </v-row>
              </m-area>
            </div>
            <!-- 官方精选、周边产品-->
            <div v-if="item.type === 3">
              <m-area :title="item.name">
                <v-row slot="other-product" no-gutters>
                  <v-hover v-slot:default="{ hover }">
                    <v-col cols="6" slot="first-product">
                      <v-img
                        height="400"
                        :class="`elevation-${hover ? 12 : 0}`"
                        :src="item.panelContents[0].picUrl"
                        class="transition-swing"
                      ></v-img>
                    </v-col>
                  </v-hover>
                  <v-col
                    v-for="(product, i) in item.panelContents"
                    :key="product.id"
                    :cols="i == 0 ? 0 : 3"
                  >
                    <card-product
                      v-if="i != 0"
                      :url="product.picUrl"
                      :title="product.productName"
                      :subtitle="product.subTitle"
                      :price="product.salePrice"
                    ></card-product>
                  </v-col>
                </v-row>
              </m-area>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Carousels from "../../components/carousels.vue";
import CardProduct from "../../components/cardProduct.vue";
import MArea from "../../components/mArea.vue";
export default {
  name: "Home",
  components: {
    Carousels,
    CardProduct,
    MArea,
  },
  data() {
    return {
      banners: [],
      homeList: [],
    };
  },
  methods: {
    rounded(i) {
      if (i == 0) {
        return "rounded-l";
      }
      if (i == 3) {
        return "rounded-r";
      }
    },
  },
  created() {
    this.$axios
      .get("/home")
      .then((res) => {
        console.log(res);
        this.banners = res.data.result.find(
          (item) => item.type === 0
        ).panelContents;
        this.homeList = res.data.result;
      })

      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="less" scoped>
.home-container {
  width: 1220px;
}
.ads-row,
.hot-product,
.guanfang-product {
  margin-top: 28px;
}
</style>