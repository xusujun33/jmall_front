<template>
    <div class="index">
        <!-- 导航栏 -->
        <v-app-bar app color="black" height="100" dark fixed flat hide-on-scroll>
            <v-btn class="ma-4" fab color="" to="/home">
                <v-icon>mdi-alpha-j</v-icon>
            </v-btn>

            <v-spacer></v-spacer>
            <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="输入商品信息" clearable
                class="hidden-sm-and-down" style="width:100px"></v-text-field>
            <div class="mx-8">
                <v-btn text class="grey--text text--lighten-2" to="/goods">
                    全部商品
                </v-btn>

                <v-btn text class="grey--text text--lighten-2">
                    捐赠
                </v-btn>
            </div>
            <span class="divied">
                |
            </span>
            <div class="mx-8">
                <v-btn class="grey--text text--lighten-1" icon to="/login">
                    <v-icon>mdi-account</v-icon>
                </v-btn>
                <v-btn class="grey--text text--lighten-1" icon>
                    <v-icon>mdi-cart</v-icon>
                </v-btn>
            </div>
        </v-app-bar>
        <!-- 工具栏 -->
        <v-toolbar class="toolbar d-flex justify-center" color="white" elevation="1">
            <div class="toolbar-div">
                <v-toolbar-title class="toolbar-title">
                    <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>
                </v-toolbar-title>
            </div>

        </v-toolbar>
        <!-- 内容 -->
        <v-main class="index-main">
            <router-view></router-view>
        </v-main>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                items: [{
                        text: '首页',
                        disabled: false,
                        href: 'home',
                    },
                    {
                        text: '全部',
                        disabled: false,
                        href: 'goods',
                    },
                    {
                        text: '品牌周边',
                        disabled: false,
                        href: 'aa',
                    },
                ],
            }
        },
        components: {

        }
    }
</script>

<style scoped>
    .index {
        background-color: #ededed;
    }

    .divied {
        color: gray;
        font-weight: bold;
    }

    .toolbar {
        margin-top: 100px;
    }

    .toolbar-div {
        width: 1220px;
    }
</style>