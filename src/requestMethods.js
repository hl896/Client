import axios from 'axios';

const BASE_URL = "http://hyweb.hopto.org:5000/api/";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2NlZjBlMzExZTE2NzBlM2JiYWM5NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzMwNjkwMCwiZXhwIjoxNjc3NTY2MTAwfQ.8sg0FzJUB9pG2a1GL2FsLQJTu2r9V-YZ-R0DynjqiLk"
export const publicRequest = axios.create({
    baseURL: BASE_URL,

});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:`hy ${token}`}
});