import Vue from 'vue'
import Router from 'vue-router'
import home from "../views/home";
import HelloWorld from "../components/HelloWorld";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: home
    },
    {
      path: '/relative',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
