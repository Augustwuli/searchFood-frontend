// 配置API接口地址
// const root = '/api/v1'
// const root = 'http://rap2api.taobao.org/app/mock/118764/'
const root = '/api'
// 引用 axios
const axios = require('axios')
// 自定义判断元素类型
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (let key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}
function apiAxios (auth, method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  if (auth) {
    axios({
      method: method,
      url: url,
      data: method === 'POST' || method === 'PUT' ? params : null,
      params: method === 'GET' || method === 'DELETE' ? params : null,
      baseURL: root,
      withCredentials: false,
      headers: {
        Authorization: auth
      }
    })
      .then(function (res) {
        console.log(res)
        if (res.data.success === true) {
          if (success) {
            success(res.data)
          }
        } else {
          if (failure) {
            failure(res.data)
          } else {
            window.alert('error: ' + JSON.stringify(res.data))
          }
        }
      })
      .catch(function (err) {
        let res = err.response
        if (err) {
          window.alert('api error,HTTP CODE:' + res.status)
        }
      })
  } else {
    axios({
      method: method,
      url: url,
      data: method === 'POST' || method === 'PUT' ? params : null,
      params: method === 'GET' || method === 'DELETE' ? params : null,
      baseURL: root,
      withCredentials: false
    })
      .then(function (res) {
        console.log(res)
        if (res.data.success === true) {
          if (success) {
            success(res.data)
          }
        } else {
          if (failure) {
            failure(res.data)
          } else {
            window.alert('error: ' + JSON.stringify(res.data))
          }
        }
      })
      .catch(function (err) {
        let res = err.response
        if (err) {
          window.alert('api error,HTTP CODE:' + res.status)
        }
      })
  }
}
// 返回在 vue 模板中的调用接口
export default {
  get: function (auth, url, params, success, failure) {
    return apiAxios(auth, 'GET', url, params, success, failure)
  },
  post: function (auth, url, params, success, failure) {
    return apiAxios(auth, 'POST', url, params, success, failure)
  },
  put: function (auth, url, params, success, failure) {
    return apiAxios(auth, 'PUT', url, params, success, failure)
  },
  delete: function (auth, url, params, success, failure) {
    return apiAxios(auth, 'DELETE', url, params, success, failure)
  }
}
