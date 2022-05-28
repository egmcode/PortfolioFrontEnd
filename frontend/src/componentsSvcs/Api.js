import axios from 'axios';

export const authApi = axios.create({
    baseURL: 'https://auth.egmcodes.com',
    withCredentials: true,
    credentials: "include"
});

export const svcApi = axios.create({
    baseURL: 'https://svc.egmcodes.com/api/knowledge/'
});