<template>
  <ul>
    <li v-for="person in persons" :key="person.name">
      <person-item :person="person" @nameReset="handleNameReset"></person-item>
    </li>
  </ul>
</template>

<script>
import PersonItem from "./PersonItem.vue";
export default {
  name: "PersonList",
  props: ["persons"],
  components: { "person-item": PersonItem },
  methods: {
    handleNameReset(event) {
      let found = this.persons.find((p) => p.name === event.oldVal);
      found.name = event.newVal;
    },
  },
};
</script>

<style scoped></style>
