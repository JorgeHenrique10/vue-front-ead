import BaseService from "./base.service";

export default class CourseService extends BaseService {

    static async getAllCourses() {
        return new Promise((resolve, reject) => {
            this.request({ auth: true })
                .get('courses')
                .then((response) => resolve(response.data))
                .catch((error) => reject(error.resolve))

        })

    }

}