import axios from 'axios';

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

    async uploadFile(fileData: Object) {
        const url = this.buildURL('upload_cv');
        await axios.post(url, fileData).then((response: any) => {
            console.log(response);
        })
    }
}
