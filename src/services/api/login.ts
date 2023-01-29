import http from '../http'
import { ILoginApi } from './type'
const loginApi: ILoginApi = {
    login(params) {
        return http.post('/login', params)
    }
}