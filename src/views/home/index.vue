<template>
  <div class="index">
    <!-- 导航栏 -->
    <v-app-bar app color="black" height="100" dark fixed flat hide-on-scroll>
      <v-btn class="ma-4" fab color="" href="/home">
        <v-icon>mdi-alpha-j</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <div class="search-box">
        <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="输入商品信息" clearable
          class="hidden-sm-and-down" style="width: 300px"></v-text-field>
      </div>
      <div class="mx-12">
        <v-btn text class="grey--text text--lighten-2" to="/goods">
          全部商品
        </v-btn>

        <v-btn text class="grey--text text--lighten-2 ml-3" to="/thanks">
          捐赠
        </v-btn>
      </div>
      <span class="divied"> | </span>
      <div class="mx-12">
        <v-btn class="grey--text text--lighten-1" icon href="/login">
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn class="grey--text text--lighten-1 ml-3" icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <!-- 主体内容 -->
    <v-main>
      <!--二级导航栏 -->
      <toolbar></toolbar>
      <router-view class="main-container"></router-view>
    </v-main>
    <!-- 页脚内容 -->
    <v-footer>
      <v-container class="footer-container">
        <v-row class="pa-3">
          <v-col v-for="(item, i) in footerlist" :key="i">
            <footer-list :title="item.title" :subTitle1="item.subtitle1" :subTitle2="item.subtitle2"
              :subTitle3="item.subtitle3"></footer-list>
          </v-col>
          <v-spacer></v-spacer>
          <v-row class="align-end flex-column justify-end">
            <div class="text-h4">1012139570</div>
            <div class="my-2 text-caption grey--text">
              周一至周日10:00-23:00(限Starrer或捐赠人联系)
            </div>
            <v-btn color="indigo" outlined>在线帮助</v-btn>
          </v-row>
        </v-row>
        <v-divider></v-divider>
        <div class="pa-3">
          <v-row>
            <span class="text-caption grey--text">Copyright ©2017, exrick.cn Co., Ltd. All Rights
              Reserved.本网站设计内容大部分属锤子科技</span>
          </v-row>
          <v-row>
            <a href="http://">
              <span class="text-caption aaa">蜀ICP备16030308号-1</span>
            </a>
            <a href="http://" class="ml-4">
              <span class="text-caption aaa">蜀ICP证16030308号</span>
            </a>
          </v-row>
        </div>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
  import FooterList from "../../components/footerList.vue";
  import Toolbar from "../../components/toolbar.vue";
  export default {
    name: "Index",
    data() {
      return {
        footerlist: [{
            title: "订单服务",
            subtitle1: "购买指南",
            subtitle2: "支付方式",
            subtitle3: "送货政策",
          },
          {
            title: "订单服务",
            subtitle1: "购买指南",
            subtitle2: "支付方式",
            subtitle3: "送货政策",
          },
          {
            title: "订单服务",
            subtitle1: "购买指南",
            subtitle2: "支付方式",
            subtitle3: "送货政策",
          },
          {
            title: "订单服务",
            subtitle1: "购买指南",
            subtitle2: "支付方式",
            subtitle3: "送货政策",
          },
          {
            title: "订单服务",
            subtitle1: "购买指南",
            subtitle2: "支付方式",
            subtitle3: "送货政策",
          },
          {
            title: "订单服务",
            subtitle1: "购买指南",
            subtitle2: "支付方式",
            subtitle3: "送货政策",
          },
        ],
      };
    },
    components: {
      Toolbar,
      FooterList,
    },
    methods: {},
  };
</script>

<style lang="less" scoped>
  .main-container {
    width: 1220px;
    margin: 0 auto;
  }

  .divied {
    color: gray;
    font-weight: bold;
  }

  .search-box {
    width: 300px;
    margin-right: 50px;
  }

  a {
    text-decoration: none;

    .aaa {
      color: grey;

      &:hover {
        color: indigo;
      }
    }
  }

  .footer-container {
    width: 1220px;
  }
</style>