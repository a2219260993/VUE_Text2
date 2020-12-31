import Vue from 'vue'
import Router from 'vue-router'
import loginChilds from './login'
import Index from '../pages/Login/Index.vue';
import Todo from '../pages/Login/todo.vue'
import ADD from '../pages/Login/add.vue';
import Does from '../pages/Login/does.vue';
import font from '@/assets/font/iconfont.js';
Vue.use(font)
Vue.use(Router)

let routes = [{
    path: '',
    component: resolve => require(['@/pages/Login/Login'], resolve),
    children: [].concat(loginChilds),
    meta: {
      title: '登录页面'
    }
  },
  {
    path: '/index',
    component: Index,
    children: [{
      //在/home组件下的路由占位符中渲染出Todo组件
      path: '',
      components: {
        add: ADD,
        todo: Todo,
        does: Does
      },
    }]
  }
]

export const allRoutes = routes

export default new Router({
  routes
})