import BaseService from "./base.service";

export default class ResetPassword extends BaseService {

    static async forgotPassword(params) {
        return new Promise((resolve, reject) => {
            this.request()
                .post('forgot-password', params)
                .then(response => resolve(response.data))
                .catch(error => reject(error.resolve))
        })
    }
    static async reset(params) {
        return new Promise((resolve, reject) => {
            this.request()
                .post('reset-password', params)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error.resolve))
        })
    }
}