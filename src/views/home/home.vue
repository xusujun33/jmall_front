<template>
  <div class="home">
    <v-container class="home-container">
      <!-- 轮播图 -->
      <carousels></carousels>
      <!-- 四个小卡片 -->
      <v-row no-gutters class="ads-row">
        <v-col v-for="(item, i) in cardDatas" :key="i" cols="3">
          <cardview
            :title="item.title"
            :subtitle="item.subtitle"
            :url="item.url"
          ></cardview>
        </v-col>
      </v-row>
      <!-- 热门商品 -->
      <div class="hot-product">
        <v-card>
          <v-card-title primary-title> 热门商品 </v-card-title>
        </v-card>
        <v-row no-gutters>
          <v-col cols="6" v-for="(item, i) in hotProducts" :key="i">
            <card-product
              :title="item.title"
              :subtitle="item.subtitle"
              :url="item.url"
              :price="item.price"
            ></card-product>
          </v-col>
        </v-row>
      </div>
      <!-- 官方精选 -->
      <div class="guanfang-product">
        <v-card>
          <v-card-title primary-title> 官方精选 </v-card-title>
        </v-card>
        <v-row no-gutters>
          <v-col cols="6">
            <v-card height="400" hover>
              <v-img :src="url" contain aspect-ratio="1.45"> </v-img>
            </v-card>
          </v-col>
          <v-col cols="3" v-for="(item, i) in guanfangProduct" :key="i">
            <card-product
              :title="item.title"
              :subtitle="item.subtitle"
              :url="item.url"
              :price="item.price == null ? '288.00' : item.price"
            ></card-product>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import Cardview from "../../components/cardview.vue";
import Carousels from "../../components/carousels.vue";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import pic4 from "../../assets/pic4.png";
import pic5 from "../../assets/pic5.png";
import pic6 from "../../assets/pic6.png";
import pic7 from "../../assets/5bdebb41e11f4.jpg";
import picproduct1 from "../../assets/prod-pic1.png";
import picproduct2 from "../../assets/prod-pic2.png";
import picproduct3 from "../../assets/prod-pic3.png";
import picproduct4 from "../../assets/prod-pic4.png";
import picproduct5 from "../../assets/prod-pic5.png";
import picproduct6 from "../../assets/prod-pic6.png";
import CardProduct from "../../components/cardProduct.vue";
export default {
  name: "Home",
  components: {
    Carousels,
    Cardview,
    CardProduct,
  },
  data() {
    return {
      url: pic7,
      hotProducts: [
        {
          title: "IPhone X 全面屏 全面绽放",
          subtitle: "此商品为测试商品，拍下不能发货",
          url: pic5,
          price: "4999.00",
        },
        {
          title: "捐赠商品",
          subtitle: "您的捐赠将用于本站维护 给您带来更好的体验",
          url: pic6,
          price: "1.00",
        },
      ],
      cardDatas: [
        {
          title: "Smartisan 新品配件",
          subtitle: "功夫配件，一应俱全",
          url: pic1,
        },
        {
          title: "以旧换新",
          subtitle: "两重优惠最高补贴400元",
          url: pic2,
        },
        {
          title: "Smartisan 周边新品",
          subtitle: "周边新品，应季上新",
          url: pic3,
        },
        {
          title: "推荐购机有好礼",
          subtitle: "推荐购买手机成功者，可获耳机一条",
          url: pic4,
        },
      ],
      guanfangProduct: [
        {
          title: "坚果3 钢化玻璃膜",
          subtitle: "功夫配件，一应俱全",
          url: picproduct1,
        },
        {
          title: "坚果3 国旗保护套",
          subtitle: "两重优惠最高补贴400元",
          url: picproduct2,
        },
        {
          title: "Smartisan 软胶保护套",
          subtitle: "周边新品，应季上新",
          url: picproduct3,
        },
        {
          title: "Smartisan 半入二级",
          subtitle: "推荐购买手机成功者，可获耳机一条",
          url: picproduct4,
        },
        {
          title: "坚果3 TPU软胶保护套",
          subtitle: "推荐购买手机成功者，可获耳机一条",
          url: picproduct5,
        },
        {
          title: "足迹背贴 乐高创始人",
          subtitle: "推荐购买手机成功者，可获耳机一条",
          url: picproduct6,
        },
      ],
    };
  },
};
</script>

<style scoped>
.home-container {
  width: 1250px;
}
.ads-row,
.hot-product,
.guanfang-product {
  margin-top: 28px;
}
</style>