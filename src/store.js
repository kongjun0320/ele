import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SET_LOCATION: 'set_location',
  SET_ADRESS: 'set_address'
}

const state = {
  location: {},
  address: ''
}
const getters = {
  location: state => state.location,
  address: state => state.address
}
const mutations = {
  [types.SET_LOCATION](state, location) {
    state.location = location
  },
  [types.SET_ADRESS](state, address) {
    state.address = address
  }
}
const actions = {
  setLocation({ commit }, location) {
    commit(types.SET_LOCATION, location)
  },
  setAddress({ commit }, address) {
    commit(types.SET_ADRESS, address)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
