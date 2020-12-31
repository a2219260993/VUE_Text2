export const LOGIN = 'LOGIN'

export default {
  state: {
    userName: '',
    token: ''
  },
  //mutations 只能放同步代码
  mutations: {
    //应该就等于 login（）
    [LOGIN](state, Data) {
      Object.assign(state, {
        userName: Data.userName,
        token: Data.access_token
      })
    }
  },
  //actions 是放异步代码
  actions: {
    async [LOGIN]({
      commit
    }, queryData) {
      const Data = {
        userName: queryData.userName,
        token: '123456'
      }
      localStorage.setItem('token', Data.token)
      localStorage.setItem('username', Data.userName)
      commit(LOGIN, Data)
      return Data
    }
  }
}