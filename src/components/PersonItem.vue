<template>
  <div>
    {{ person }}
    <button @click.stop="resetName">Reverse</button>
  </div>
</template>

<script>
export default {
  name: "PersonItem",
  props: ["person"],
  methods: {
    resetName() {
      this.$emit("nameReset", {
        newVal: this.person.name
          .split("")
          .reverse()
          .join(""),
        oldVal: this.person.name
      });
      // this.person.name = this.person.name.split("").reverse().join("");
    }
  }
};
</script>

<style scoped></style>
