import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
const url = import.meta.env.BASE_URL;

interface ResponseData {
    code: number;
    data?: any;
    message: string;
}



let service: AxiosInstance | any;

service = axios.create({
    baseURL: `${url}/api/`,
    timeout: 60000,
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-type": "application/json",
    },
});

service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (error: any) => {
        // Do something with request error
        console.error("error:", error); // for debug
        Promise.reject(error);
    }
);

service.interceptors.response.use(
    (res: AxiosResponse) => {
        if (res.status === 200) {
            const data: ResponseData = res.data
            return data.data;
        } else if (res.status === 401) {
            //todo: clean user store?
        }

        //todo code withoutToken?

        else {
            return Promise.reject(new Error(res.data.message || "Error"));
        }
    },
    (error: any) => Promise.reject(error)
);

export default service;