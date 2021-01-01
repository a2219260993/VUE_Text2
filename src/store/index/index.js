export default {
  state: {
    list: [{
        key: 1,
        data: "我已经被完成了",
        targe: true,
        time: "5/17/18"

      }, {
        key: 2,
        data: "我还没有",
        targe: false,
        time: "4/17/18"
      },
      {
        key: 3,
        data: "我也即将被完成",
        targe: false,
        time: "4/17/18"
      }, {
        key: 4,
        data: "我已经被完成了",
        targe: true,
        time: "4/17/18"
      }
    ],
    const: 5
  },
  //mutations 只能放同步代码
  mutations: {
    addToList(state, s) {
      var obj = {
        key: state.const,
        data: s,
        targe: false,
        time: 'Now'
      }
      state.list.push(obj);
      state.const++;
    },
    changeTarge(state, s) {
      let y = state.list.findIndex(x => {
        return x.key == s
      })
      // console.log(y);
      if (y !== -1) {
        state.list[y].targe = !state.list[y].targe;
      }
    }

  },
  //actions 是放异步代码
  actions: {

  },
  getters: {
    todoList: state => {
      return state.list.filter(s => s.targe === false)
    },
    doesList: state => {
      return state.list.filter(s => s.targe === true)
    }
  }
}