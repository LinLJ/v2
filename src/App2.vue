<template>
  <h3 @click="title = 'Oh, Title changed'" ref="to">{{ title }}</h3>
</template>

<script>
export default {
  name: "App2",
  data() {
    return { title: "The Second Vue Instance" };
  },
  watch: {
    title() {
      console.log("......" + this.$refs["to"].innerHTML);
    }
  }
};
</script>

<style scoped></style>
