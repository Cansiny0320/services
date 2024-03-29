/**
 * axios配置
 */

import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BASE_API

axios.defaults.timeout = 6000

// http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers = {}
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  res => {
    return res
  },
  err => {
    return Promise.reject(err)
  }
)

export default axios
