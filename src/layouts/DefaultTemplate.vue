<template>
  <div>
    <header-component></header-component>
    <section>
      <router-view></router-view>
    </section>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { onBeforeMount } from "@vue/runtime-core";
export default {
  name: "DefaultTemplate",
  setup() {
    onBeforeMount(() => {
      document.body.classList.add("page");
      document.body.classList.add("dark");
      document.title = "Curso EAD com Vue.js 3";
    });
  },
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
</style>