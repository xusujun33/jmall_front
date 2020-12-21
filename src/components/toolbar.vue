<template>
  <div>
    <v-toolbar class="toolbar" color="white" elevation-1>
      <v-container class="bread-container">
        <v-breadcrumbs divider="-" :items="items">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item>
              <a class="bread-a-item" :href="item.href"> {{ item.text }}</a>
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
        items: [{
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
  .bread-container {
    width: 1220px;
  }

  .bread-a-item {
    text-decoration: none;
    color: rgb(82, 82, 82);

    &:active {
      color: royalblue;
    }

    &:hover {
      color: royalblue;
    }
  }
</style>