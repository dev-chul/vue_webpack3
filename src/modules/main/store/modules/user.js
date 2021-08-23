import { login } from '@/modules/main/api/user'
import { getToken, setToken } from '@/utils/auth'
import { getInfo } from '../../api/user'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const getters = {
  token: state => state.token,
  avatar: state => state.avatar,
  name: state => state.name,
  introduction: state => state.introduction,
  roles: state => state.roles
}

const actions = {

  login ({ commit }, userInfo) {
    const { username, password } = userInfo

    const params = new URLSearchParams()
    params.append('username', username)
    params.append('password', password)

    return new Promise((resolve, reject) => {
      login(params).then(response => {
        console.log('login start...')
        commit('SET_TOKEN', response.token)
        setToken(response.token)
        resolve()
        console.log('login complete...')
      }).catch(error => {
        reject(error)
      })
    })
  },

  getInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        console.log('getInfo start...')

        if (!response.roles || response.roles.length <= 0) {
          // reject('getInfo: roles must be a non-null array!')
        }

        commit('SET_ROLES', response.roles)
        commit('SET_NAME', response.username)
        commit('SET_AVATAR', response.email)
        // commit('SET_INTRODUCTION', introduction)
        resolve(response)
        console.log('getInfo complete...')
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
