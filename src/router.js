import Vue from 'vue'
import Router from 'vue-router'

import mainRouter from '@/modules/main/router/index'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) { return originalPush.call(this, location, onResolve, onReject) }
  return originalPush.call(this, location).catch((err) => {
    if (Router.isNavigationFailure(err)) { return err }
    return Promise.reject(err)
  })
}

const router = new Router({
  routes: [
    ...mainRouter
  ]
})

export default router
