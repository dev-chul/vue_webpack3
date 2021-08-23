import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/modules/main/layout'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) { return originalPush.call(this, location, onResolve, onReject) }
  return originalPush.call(this, location).catch((err) => {
    if (Router.isNavigationFailure(err)) { return err }
    return Promise.reject(err)
  })
}

export const defaultRouter = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/modules/main/views/Home'),
        name: 'Home',
        meta: { title: 'Home' }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/modules/main/views/auth/Login'),
    meta: { title: 'Login' }
  }
]

export const roleRouter = [
  {
    path: '/info',
    component: Layout,
    redirect: '/info/index',
    children: [
      {
        path: 'index',
        component: () => import('@/modules/main/views/info/Index'),
        name: 'Info',
        meta: { title: 'Info', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/service',
    component: Layout,
    redirect: '/service/index',
    children: [
      {
        path: 'service1',
        component: () => import('@/modules/main/views/service/Service1'),
        name: 'Service1',
        meta: { title: 'Service1', roles: ['admin'] }
      },
      {
        path: 'service2',
        component: () => import('@/modules/main/views/service/Service2'),
        name: 'Service2',
        meta: { title: 'Service2', roles: ['admin'] }
      }
    ]
  }
]

export default defaultRouter

// export default new Router({
//   mode: 'history',
//   routes: defaultRouter
// })
