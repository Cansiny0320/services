/**
 * 所有的接口请求
 */

import { get } from './http'

export const hotQuestion = () => get('/hot')

/**
 *
 * @param {*} id 用户id
 */

export const userInfo = id => get('/user', { id })
