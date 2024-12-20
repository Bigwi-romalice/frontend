import axios from "axios";

const BASE_REST_API_URL = 'http://localhost:3031/api/v1/users';
const LOGIN_BASE_REST_API_URL ='http://localhost:3031/api/v1/users/login'

export const CreateUsers = (users) => axios.post(BASE_REST_API_URL,users);
export const LoginUsers = (user)=> axios.post(LOGIN_BASE_REST_API_URL,user);