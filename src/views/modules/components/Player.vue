<template>
  <div class="training">
    <div class="card bg-laravel">
      <span class="icon">
        <img src="images/icons/laravel.svg" alt="" />
      </span>
      <span class="title">{{ lesson.name }}</span>
      <router-link :to="{ name: 'campus.home' }" class="btn laravel">
        <i class="fas fa-chevron-left"></i> Voltar
      </router-link>
    </div>
    <iframe
      width="100%"
      height="auto"
      :src="'https://www.youtube.com/embed/' + lesson.video"
      :title="lesson.name"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <div class="description-lesson">
    {{ lesson.description }}
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "Player",
  setup() {
    const store = useStore();
    const lesson = computed(() => store.state.course.lesson);

    return {
      lesson,
    };
  },
};
</script>

<style>
</style>