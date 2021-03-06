import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import rubric from '@/components/rubric'
import view from '@/components/view'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/rubric',
      name: 'rubric',
      component: rubric
    }, {
      path: '/view',
      name: 'view',
      component: view
    }, {
      path: '/test',
      name: 'test',
      component: test
    }
  ],
  linkExactActiveClass: 'active'
})
