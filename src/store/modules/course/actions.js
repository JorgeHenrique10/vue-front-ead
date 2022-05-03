import CourseService from "../../../services/course.service";

const actions = {
    getAllCourses({ commit }) {
        CourseService.getAllCourses()
            .then((response) => {
                commit('SET_ALL_COURSES', response.data)
            })

    }
}

export default actions;