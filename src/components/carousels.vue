<template>
    <v-carousel>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition"
            transition="fade-transition" show-arrows-on-hover cycle hide-delimiter-background>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        name: "Carousels",
        data() {
            return {
                items: [{
                        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    },
                ],
            }
        }
    }
</script>

<style>

</style>