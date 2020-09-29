/*
 * @LastEditors: wyswill
 * @Description: 通用axios 配置
 * @Date: 2020-09-29 10:29:29
 * @LastEditTime: 2020-09-29 10:58:28
 */
import axios, { AxiosRequestConfig } from 'axios';
const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export function query(reqConfig: AxiosRequestConfig, token = '') {
  if (token.length > 0)
    Object.assign(reqConfig, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  return instance.request(reqConfig);
}
