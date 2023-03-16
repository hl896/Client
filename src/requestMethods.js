import axios from 'axios';

const BASE_URL = "http://hyweb.hopto.org:5000/api/";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2NlZjBlMzExZTE2NzBlM2JiYWM5NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODYwMjU3OSwiZXhwIjoxNjc4ODYxNzc5fQ.CZVx0D8cUX4CjESl_7OJbk0IxPn7enMwOgUN9d0h6t8"
export const publicRequest = axios.create({
    baseURL: BASE_URL,

});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:`hy ${token}`}
});