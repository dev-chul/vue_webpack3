import Vue from 'vue'
import Vuex from 'vuex'
// import getters from './getters'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

// const isDev = process.env.NODE_ENV === 'development'

const store = new Vuex.Store({
  // strict: isDev,
  modules
  // getters
})

export default store
