import Vue from "vue";
import App from "./App.vue";
import App2 from "./App2.vue";

Vue.config.productionTip = false;

let vm1 = new Vue({
  el: "#app",
  render: h => h(App),
  beforeCreate() {
    console.log("beforeCreate...");
  },
  created() {
    console.log("created...");
  },
  beforeMount() {
    console.log("beforeMount...");
  },
  mounted() {
    console.log("mounted...");
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
});

new Vue({
  el: "#app2",
  render: createElement => createElement(App2)
});

console.log(vm1);
