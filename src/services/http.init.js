import axios from "axios";
import { URL_API, TOKEN_NAME } from "../configs";
export default class Http {
    constructor(status) {
        const token = localStorage.getItem(TOKEN_NAME);
        const header = status.auth ? {
            Authotization: `Bearer ${token}`,
            Accept: 'application/json'
        } : {}
        this.instance = axios.create({
            baseURL: URL_API,
            headers: header
        });

        return this.instance
    }
}