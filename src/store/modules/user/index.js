import AuthService from "../../../services/auth.service";
import ResetPassword from "../../../services/reset.password.service";

export default {
    state: {
        user: {
            name: '',
            email: ''
        },
        loggedIn: false
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
            state.loggedIn = true;
        },
        LOGOUT(state) {
            state.user = {
                user: '',
                email: ''
            };
            state.loggedIn = false;
        }
    },
    actions: {
        auth({ state }, params) {
            state
            return AuthService.auth(params);
        },
        forgotPassword({ state }, params) {
            state.loggedIn
            return ResetPassword.forgotPassword(params)
        },
        reset({ state }, params) {
            state.loggedIn
            return ResetPassword.reset(params)
        }
    }
}