<template>
  <div class="pageTitle">
    <span class="title">{{ course.name }}</span>
    <span class="dots">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div class="content">
    <div class="container">
      <div class="left">
        <modules :modules="course.modules" />
      </div>
      <div class="right">
        <div class="content">
          <player />
          <supports />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import Modules from "./components/Modules.vue";
import Player from "./components/Player.vue";
import Supports from "./components/Supports.vue";
import { useStore } from "vuex";
export default {
  name: "ModulesAndLessons",
  components: {
    Modules,
    Player,
    Supports,
  },
  setup() {
    const store = useStore();
    const course = computed(() => {
      return store.state.course.course;
    });
    return {
      course,
    };
  },
};
</script>

<style>
</style>