<template>
  <v-toolbar class="toolbar" color="white" elevation-1>
    <div class="toolbar-div">
      <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {
      items: [
        {
          text: "首页",
          disabled: false,
          href: "home",
        },
        {
          text: "全部",
          disabled: false,
          href: "goods",
        },
        {
          text: "品牌周边",
          disabled: false,
          href: "aa",
        },
      ],
    };
  },
};
</script>

<style>
.toolbar-div {
  width: 1180px;
  margin: auto;
}
</style>