<template>
  <div>
    <v-container>
      <m-area title="捐赠名单">
        <v-card slot="hot-product" class="rounded-t-0" elevation="1" outlined>
          <v-simple-table class="mx-4" fixed-header>
            <template v-slot:default>
              <thead>
                <tr class="tr">
                  <th
                    width="20%"
                    class="text-center text-subtitle-1 black--text"
                  >
                    昵称
                  </th>
                  <th
                    width="20%"
                    class="text-center text-subtitle-1 black--text"
                  >
                    捐赠方式
                  </th>
                  <th
                    width="20%"
                    class="text-center text-subtitle-1 black--text"
                  >
                    捐赠金额(￥)
                  </th>
                  <th
                    width="20%"
                    class="text-center text-subtitle-1 black--text"
                  >
                    留言信息
                  </th>
                  <th class="text-center text-subtitle-1 black--text">
                    捐赠时间
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in thanksData" :key="item.id">
                  <td class="text-center">{{ item.nickName }}</td>
                  <td class="text-center">{{ item.payType }}</td>
                  <td class="text-center">{{ item.money }}</td>
                  <td class="text-center">{{ item.info }}</td>
                  <td class="text-center">{{ item.time }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-row justify="end" class="pa-6" align="center">
            <span class="mr-2">共500条</span>
            <v-pagination
              color="indigo"
              v-model="page"
              :length="pages"
              @input="clickPage()"
              total-visible="8"
            ></v-pagination>
          </v-row>
        </v-card>
      </m-area>
      <m-area class="mt-8" title="为什么要捐赠">
        <v-card slot="hot-product" class="rounded-t-0" outlined elevation="1">
          <div class="text-left text-body-1 pa-6 text-decortaiong" width="600px">
            捐赠是国外用来支持开发者和资源贡献者的一种常见的方式。
            这些开发者不通过加入广告或者进行第三方推广获得收入，
            仅通过使用的用户自己主动捐赠来表达对开发者的感谢！
            当一个非盈利项目仅仅依靠兴趣的支撑，很难确定它还能走多远。
            所有的捐赠都将用于提升我的环境配置，维持网站的运行和提高我的积极性。
            这个渠道的存在并不意味着你必须捐赠。
            你也可以不做任何事。你的捐赠意味着你对我过去所做的表示感谢，而不是表达对未来的期望。
            但你的捐赠会提高我的积极性和设备配置让我努力把手头上的事做的更好。
            我会维护一份名单以感谢所有的捐赠者。正如我所说，捐赠是一个向我表示感谢的方式。
          </div>
        </v-card>
      </m-area>
      <m-area class="mt-8" title="我要捐赠">
        <v-card slot="hot-product" class="rounded-t-0" outlined elevation="1">
          <div class="text-left text-body-1 pa-6 text-decortaiong" width="600px">
            
          </div>
        </v-card>
      </m-area>
    </v-container>
  </div>
</template>

<script>
import MArea from "../../components/mArea.vue";
export default {
  name: "Thanks",
  data() {
    return {
      page: 1,
      pages: 50,
      thanksData: [],
    };
  },
  components: { MArea },
  methods: {
    getThanks() {
      this.$axios
        .get("/thanks", {
          params: {
            page: this.page,
          },
        })
        .then((res) => {
          console.log(res);

          this.thanksData = res.data.result;
        });
    },
    clickPage() {
      this.getThanks(this.page);
    },
  },
  created() {
    this.getThanks(this.page);
  },
};
</script>

<style lang="less" scoped>
.text-decortaiong{
  letter-spacing: 15px;
}
</style>