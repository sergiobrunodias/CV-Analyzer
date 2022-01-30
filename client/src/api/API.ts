import axios from 'axios';
import { CandidateData } from '../types'

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response && error.response.status === 404) {
        return error;
    } else return Promise.reject(error);
});

export default class API {
    url: String;

    constructor() {
        this.url = `http://localhost:5000/api`
    }

    buildURL(path: String) {
        return `${this.url}/${path}`
    }

    async uploadFile(fileData: FormData) {
        const url = this.buildURL('upload_cv');
        const promise = axios.post(url, fileData);
        const dataPromise = promise.then((response) => response);
        return dataPromise;
    }

    async uploadJobNotice(data: CandidateData) {
        const url = this.buildURL('upload_job_notice');
        const promise = axios.post(url, data);
        const dataPromise = promise.then((response) => response);
        return dataPromise;
    }
}
