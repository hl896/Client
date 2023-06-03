import axios from 'axios';

const BASE_URL = "http://ec2-3-25-66-199.ap-southeast-2.compute.amazonaws.com:5000/api/";
const user =JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const token = currentUser?.accessToken;

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2NlZjBlMzExZTE2NzBlM2JiYWM5NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODYwMjU3OSwiZXhwIjoxNjc4ODYxNzc5fQ.CZVx0D8cUX4CjESl_7OJbk0IxPn7enMwOgUN9d0h6t8"
export const publicRequest = axios.create({
    baseURL: BASE_URL,

});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:`hy ${token}`}
});