<template>
  <v-card max-width="305" elevation="0" hover outlined>
    <div>
      <v-card-title class="title">{{ title }}</v-card-title>

      <v-card-subtitle class="title subtitle-1">{{ subtitle }}</v-card-subtitle>
    </div>

    <v-img :src="url" height="100"></v-img>
  </v-card>
</template>

<script>
export default {
  name: "Cardview",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    url: {
      required: true,
    },
  },
};
</script>

<style>
.title {
  display: flex;
  justify-content: center;
}
</style>