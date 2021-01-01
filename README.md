# 1.2完成夜间版本

![完成](https://ftp.bmp.ovh/imgs/2021/01/8b1284cb04dae3d2.png)

![完成](https://ftp.bmp.ovh/imgs/2021/01/97452040f73cb7e6.png)

首先在login页面登录 利用` this.$router.push('index') `转跳至主页

主页里面就大致将总体样式给设置了一下 然后利用了三个路由占位符 
```
    <router-view name='add'></router-view>
    <router-view name='todo'></router-view>
    <router-view name='does'></router-view>
```
其中用到的路由规则：
```
    children: [{
      //在/home组件下的路由占位符中渲染出Todo组件
      path: '',
      components: {
        add: ADD,
        todo: Todo,
        does: Does
      },
    }]
```
然后利用vuex 全局数据  state 代表数据 mutations代表着方法  这里是同步的方法  actions里面放异步代码 然后最重要的还是 getters 相当于是计算属性，我们这个项目利用到了getters 筛选已经完成的事情和没完成的事情 然后在不同的组件中渲染不同的列表

```
todoList: state => {
  return state.list.filter(s => s.targe === false)
},
doesList: state => {
  return state.list.filter(s => s.targe === true)
}
```
然后在不同的组件中渲染不同的列表

这里我没用命令行 我用的VUE UI

而且感觉vant 不是很好用=-=

开头会有报错
```
Unknown custom element: <ui> - did you register the component correctly? For recursive components, make sure to provide the "name" option.

未知的自定义元素：<UI>-您是否正确注册了组件？对于递归组件，请确保提供“name”选项。
```
不是很懂是什么错误

目前就这样！在这个案例中学到了vuex  router 唯一不足的地方可能是对vant组件库不是很会用吧 列表那里本来准备用vant的组件库  但是发现我改不了其中的样式 就放弃了


# todo_app

## 起步
```
npm install
```

### 开发
```
npm run serve
```

### 发布
```
npm run build
```

### 测试
```
npm run lint
```

### 组件库
https://vant-contrib.gitee.io/vant/#/zh-CN/

参照pages/Login.
### vueRouter
https://router.vuejs.org/zh/

参照本项目router目录

### vuex
https://vuex.vuejs.org/zh/

参照本项目store目录

### sass
https://sass.bootcss.com/guide

https://juejin.cn/post/6844903853335248910

参照pages/Login.vue

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

