import * as axios from "axios";


const apiService = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': '0e5c6193-92d9-43fa-8815-9bba27fab0ab'
    }
})

let loginApi =  {
    login(email, password, rememberMe, captcha ) {
        return apiService.post('auth/login', {email, password, rememberMe, captcha}).then(response => {
            return response.data;
        })
    },

    getCaptcha() {
        return apiService.get('security/get-captcha-url').then(response => {
            return response.data;
        })
    },

    logOut() {
        return apiService.post('auth/logout').then(response => {
            return response.data;
        })
    },

   authMe() {
        return apiService.get('auth/me').then(response => {
            return response.data;
        })
    },
}

export default loginApi;

