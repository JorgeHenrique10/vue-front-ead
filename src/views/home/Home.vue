<template>
  <div>
    <div class="pageTitle">
      <span class="title">Meus Cursos</span>
      <span class="dots">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>

    <div class="content">
      <ul class="listCourses">
        <card-course
          :course="course"
          :bgName="'laravel'"
          v-for="course in courses"
          :key="course.id"
        ></card-course>
      </ul>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "@vue/runtime-core";
// @ is an alias to /src
import CardCourse from "./CardCourse.vue";
import { useStore } from "vuex";
export default {
  name: "Home",
  components: { CardCourse },
  setup() {
    const courses = computed(() => {
      return store.state.course.courses;
    });
    const store = useStore();
    onMounted(() => {
      store.dispatch("getAllCourses");
    });

    return {
      courses,
    };
  },
};
</script>
