<template>
  <div>
    <v-container>
      <v-row class="mb-3">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              text
              color="grey"
              @click="priceSort()"
            >
              <span class="caption">综合排序</span>
            </v-btn>
          </template>
          <span>按综合排序</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              text
              color="grey"
              @click="priceAsc()"
            >
              <span class="caption">价格从低到高</span>
            </v-btn>
          </template>
          <span>价格从低到高排序</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              text
              color="grey"
              @click="priceDesc()"
            >
              <span class="caption">价格从高到低</span>
            </v-btn>
          </template>
          <span>价格从高到低排序</span>
        </v-tooltip>
      </v-row>
      <v-row no-gutters>
        <v-col cols="3" v-for="item in allgoods" :key="item.productId">
          <card-product
            :price="item.salePrice"
            :url="item.productImageBig"
            :title="item.productName"
            :subtitle="item.subTitle"
          ></card-product>
        </v-col>
      </v-row>
      <v-row justify="end" class="pa-6" align="center">
        <span class="mr-2">共{{ total }}条</span>
        <v-pagination
          color="indigo"
          v-model="page"
          :length="pages"
          @input="clickPage()"
          total-visible="6"
        ></v-pagination>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardProduct from "../../components/cardProduct.vue";
export default {
  name: "Goods",
  data() {
    return {
      allgoods: [],
      page: 1,
      total: 0,
      sort: 0,
    };
  },
  components: {
    CardProduct,
  },
  computed: {
    pages: function () {
      return this.total % 20 == 0 ? this.total / 20 : this.total / 20 + 1;
    },
  },
  methods: {
    getGoods(page, sort, priceGt, priceLte) {
      // let _this = this;
      // let axios = this.$axios.create();
      this.$axios
        .get("/allgoods", {
          params: {
            page: page,
            size: 20,
            sort: sort,
            priceGt: priceGt,
            priceLte: priceLte,
          },
        })
        .then((res) => {
          this.allgoods = res.data.result;
          this.total = res.data.total;
          console.log(res);
        })
        .catch((err) => {
          alert("err:" + err.message);
        });
    },
    priceAsc() {
      this.sort = -1;
      this.getGoods(this.page, this.sort);
    },
    priceDesc() {
      this.sort = 1;
      this.getGoods(this.page, this.sort);
    },
    priceSort() {
      this.sort = 0;
      this.getGoods(this.page, this.sort);
    },
    clickPage() {
      this.getGoods(this.page, this.sort);
    },
  },
  created() {
    this.getGoods(this.page);
    let a = [1, 2, 3, 4, 5];
    let b = a.slice(1, 3);
    console.log(a);
    console.log(b);
  },
};
</script>


    CardProduct<style>
</style>