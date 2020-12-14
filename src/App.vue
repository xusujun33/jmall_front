<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: 'App',

    components: {},

    data: () => ({
      //
    }),
  };
</script>
<style lang="less" >
  body{
    min-width: 1250px;
    min-height: 768px;
  }
</style>