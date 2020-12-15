<template>
  <div id="app">
    <v-app>
        <router-view class="main"></router-view>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
<style lang="less" >
body {
  min-width: 1024px;
  min-height: 768px;
}
.main {
  background-color: #ededed;
}
</style>