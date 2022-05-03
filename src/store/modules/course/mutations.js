const mutations = {
    SET_ALL_COURSES(state, myCourses) {
        state.courses = myCourses
    },
    SET_COURSE_SELECTED(state, course) {
        state.course = course;
    },
    SET_LESSON_SELECTED(state, lesson) {
        state.lesson = lesson;
    },
    REMOVE_LESSON_SELECTED(state) {
        state.lesson = {
            id: '',
            name: '',
            description: '',
            video: ''
        };
    }
}

export default mutations;