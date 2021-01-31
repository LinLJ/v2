<template>
  <div id="app" @mousemove="updatePos">
    <p v-once>{{ this.sayHello() }}</p>
    <a :href="link">qiuzhanghua</a>
    <p v-html="boldText"></p>
    <button @click="inc(5, $event)">Click me</button>
    <p>{{ count }}</p>
    <p>x = {{ x }}, y = {{ y }} <span @mousemove.stop>Dead Spot</span></p>
    <input type="text" @keyup="alertMe">
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Hello Vue.js 2!",
      link: "https://github.com/qiuzhanghua",
      boldText: "<b>Bold Text</b>",
      count: 0,
      x: 0,
      y: 0,
    };
  },
  methods: {
    sayHello() {
      return this.title;
    },
    inc(d = 1) {
      this.count += d;
    },
    updatePos(event) {
      // console.log(event);
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe(event) {
      console.log(event.keyCode);
    }
    // dummy(event) {
    //   event.stopPropagation();
    // },
  },
};
</script>

<style lang="scss">
$bg_color: blue;

body {
  background-color: lightblue;
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
