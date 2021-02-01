<template>
  <div
    id="app"
    @mousemove="updatePos"
    :class="[divClasses]"
    @click="divIsRed = !divIsRed"
  >
    <p v-once>{{ this.sayHello() }}</p>
    <a :href="link">qiuzhanghua</a>
    <p v-html="boldText" :style="[myStyle, { backgroundColor: 'black' }]"></p>
    <button @click.stop="inc(5, $event)">+5</button>
    <button @click.prevent="dec(5)">-5</button>
    <p>{{ count }}</p>
    <p v-show="tooLarge">{{ tooLarge }}</p>
    <template v-if="count < 0">
      <p>&lt; 0</p>
    </template>
    <p>x = {{ x }}, y = {{ y }} <span @mousemove.stop>Dead Spot</span></p>
    <label for="text">请输入:</label>
    <input id="text" type="text" @keyup="alertMe" v-model="text" />
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
      text: "text",
      divIsRed: null,
    };
  },
  computed: {
    tooLarge() {
      return this.count >= 100 ? ">= 100" : null;
    },
    divClasses() {
      if (this.divIsRed === null) {
        return {
          green: true,
        };
      }
      return {
        red: this.divIsRed,
        blue: !this.divIsRed,
      };
    },
    myStyle() {
      return {
        color: "deeppink",
      };
    },
  },
  watch: {
    count(value, oldValue) {
      console.log(oldValue + " -> " + value);
      // let that = this;
      // setTimeout(function () {
      //   that.count = 0;
      // }, 2000);
    },
  },
  methods: {
    sayHello() {
      return this.title;
    },
    inc(step = 1) {
      this.count += step;
    },
    dec(step = 1) {
      this.count -= step;
    },
    updatePos(event) {
      // console.log(event);
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe(event) {
      console.log(event.keyCode);
    },
    // dummy(event) {
    //   event.stopPropagation();
    // },
  },
};
</script>

<style lang="scss">
$bg_color: #0000ff;

body {
  background-color: lightblue;
  margin: 0;
  border: 0;
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
  border: solid $bg_color;
  //  background-color: $bg_color;
}

.red {
  background-color: #ff0000;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}
</style>
