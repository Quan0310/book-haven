import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8088',
    // withCredentials: true,
});

// instance.interceptors.response.use(function (response) {
//     // console.log("check res axios ", response);
//     return response.data ? response.data : { status: response.status };
// }, function (error) {
//     return Promise.reject(error);
// });

export default instance;