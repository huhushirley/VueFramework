import fetch from 'isomorphic-fetch'
import { Message } from 'element-ui'

export default async function request(method, path, query = {}, body = {}, headers = {
  'Content-Type': 'application/json; charset=utf-8',
  Authorization: localStorage.adminToken,
}) {
  let queryString = ''
  if (Object.keys(query).length !== 0) {
    Object.keys(query).forEach((key) => {
      if ({}.hasOwnProperty.call(query, key)) {
        const value = query[key]
        if (key === Object.keys(query)[0]) {
          queryString += `?${key}=${value}`
        } else {
          queryString += `&${key}=${value}`
        }
      }
    })
  }
  const options = {
    method,
    headers,
  }
  if (Object.keys(body).length !== 0) { Object.assign(options, { body: JSON.stringify(body) }) }
  try {
    const res = await fetch(`${window.$config.HOST}${path}${queryString}`, options)
    const data = await res.json()
    if (res.status === 401) {
      localStorage.removeItem('adminName')
      localStorage.removeItem('adminAvatar')
      localStorage.removeItem('adminRole')
      localStorage.removeItem('adminToken')
      Message.error('账号密码错误、或登录已过期，请重新登录')
      return setTimeout(() => (window.location.href = '/login'), 1500)
    }
    if (res.status === 403) {
      return Message.error('无账号管理权限')
    }
    if (!res.ok) {
      Message.error(`发生错误：${data.msg}`)
      return Object.assign({}, { ok: false, status: res.status }, data)
    }
    return Object.assign({}, { ok: true }, data)
  } catch (err) {
    Message.error(`与服务器端通信失败: ${err}`)
    return { ok: false, msg: err }
  }
}
