<template>
  <div class="card">
    <div class="title bg-laravel">
      <span class="text">Modulos</span>
      <span class="icon far fa-stream"></span>
    </div>
    <div
      :class="['modules', moduleSelected == module.id ? 'active' : '']"
      v-for="module in modules"
      :key="module.id"
      @click.prevent="toggleModule(module.id)"
    >
      <div class="name">
        <span class="text">{{ module.name }}</span>
        <span class="icon fas fa-sort-down"></span>
      </div>
      <ul class="classes" v-show="moduleSelected == module.id">
        <li
          :class="{ active: lesson.id === lessonInPlayer.id }"
          v-for="lesson in module.lessons"
          :key="lesson.id"
          @click="setLessonPlayer(lesson)"
        >
          <span
            v-if="lesson.views.length > 0"
            class="check active fas fa-check"
          ></span>
          <span class="nameLesson">{{ lesson.name }}</span>
        </li>
      </ul>
    </div>
    <!-- <div class="modules">
      <div class="name">
        <span class="text">Modulo 2</span>
        <span class="icon fas fa-sort-down"></span>
      </div>
      <ul class="classes">
        <li>
          <span class="check fas fa-check"></span>
          <span class="nameLesson">Aula 01</span>
        </li>
        <li>
          <span class="check active fas fa-check"></span>
          <span class="nameLesson">Aula 02</span>
          <span class="file fas fa-file-archive"></span>
        </li>
        <li>
          <span class="check fas fa-check"></span>
          <span class="nameLesson">Aula 03</span>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  name: "Modules",
  props: ["modules"],
  setup() {
    const store = useStore();

    const moduleSelected = ref(0);

    const lessonInPlayer = computed(() => store.state.course.lesson);
    const toggleModule = (moduleId) => {
      moduleSelected.value = moduleId;
    };
    const setLessonPlayer = (lesson) => {
      store.state.course.lesson = lesson;
    };
    return {
      moduleSelected,
      toggleModule,
      setLessonPlayer,
      lessonInPlayer,
    };
  },
};
</script>

<style>
</style>