import axios, { AxiosRequestConfig } from 'axios'
// 设置请求头和请求路径
axios.defaults.baseURL = '/api';
// 现在，所有使用此实例的请求都将等待2.5秒，然后才会超时
axios.defaults.timeout = 2500;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


// 添加请求拦截器
axios.interceptors.request.use(function (config): AxiosRequestConfig<any> {
    // 在发送请求之前做些什么
    config.headers?.set("","") 
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});
interface ResType<T> {
    code: number
    data?: T
    msg: string
    err?: string
}
interface Http {
    get<T>(url: string, params?: unknown): Promise<ResType<T>>
    post<T>(url: string, params?: unknown): Promise<ResType<T>>
    delete<T>(url: string, params?: unknown): Promise<ResType<T>>
    upload<T>(url: string, params: unknown): Promise<ResType<T>>
    download(url: string): void
}
const http: Http = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .get(url, { params })
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err.data)
                })
        })
    },
    post(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, JSON.stringify(params))
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err.data)
                })
        })
    },
    delete(url, params) {
        return new Promise((resolve, reject) => {
          axios
            .delete(url, { data: JSON.stringify(params) })
            .then((res) => {
              resolve(res.data);
            })
            .catch((err) => {
              reject(err.data);
            });
        });
      },
    upload(url, file) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, file, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                })
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err.data)
                })
        })
    },
    download(url) {
        const iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.src = url
        iframe.onload = function () {
            document.body.removeChild(iframe)
        }
        document.body.appendChild(iframe)
    },
}
export default http