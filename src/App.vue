<template>
  <div id="app">
    <p>{{ this.sayHello() }}</p>
    <a :href="link">qiuzhanghua</a>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return { title: "Hello Vue.js 2!", link: "https://github.com/qiuzhanghua" };
  },
  methods: {
    sayHello() {
      return this.title;
    },
  },
};
</script>

<style lang="scss">
$bg_color: blue;

body {
  background-color: purple;
}

a {
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
  background-color: $bg_color;
}
</style>
