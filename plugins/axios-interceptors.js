/* eslint-disable */
function startLoading(state) {
  state.commit('ui/changeLoading', true)
}

function finishLoading(state) {
  state.commit('ui/changeLoading', false)
}

export default function ({ $axios, redirect, $config, store }) {
  // request interceptor
  $axios.interceptors.request.use(
    (config) => {
      config.url = $config.serverUrl + config.url
      // do something before request is sent
      config.params = Object.assign(config.params ? config.params : {}, {
        x: '2232323',
      })
      config.data = Object.assign(config.data ? config.data : {}, {
        region: 52,
      })
      return config
    },
    (error) => {
      // do something with request error
      return Promise.reject(error)
    }
  )
  $axios.onRequest((config) => {
    startLoading(store)
  })
  $axios.onResponse((config) => {
    finishLoading(store)
  })
  $axios.interceptors.response.use(
    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    (response) => {
      const res = response.data
      console.log(res, 'this is response')
      if (res.code === 200) {
        return res
      } else {
        redirect('/404')
        // if the custom code is not 200, it is judged as an error.
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    },
    (error) => {
      console.log('err' + error) // for debug
      return Promise.reject(error)
    }
  )

  $axios.onError((error) => {
    finishLoading(store)
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/404')
    } else if (code === 500) {
      redirect('/500')
    }
  })
}
