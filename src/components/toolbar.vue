<template>
  <div>
    <v-toolbar class="toolbar" color="white" elevation-1>
      <v-container>
        <v-breadcrumbs divider="-" :items="items">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :to="item.href">
              <span class=""> {{ item.text }}</span>
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </v-container>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {
      items: [
        {
          text: "首页",
          href: "home",
        },
        {
          text: "全部",
          href: "goods",
        },
        {
          text: "品牌周边",
          href: "aa",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.router-link-active {
  color: indigo;
}
</style>