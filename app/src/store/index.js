import Vue from 'vue';
import Vuex from 'vuex';
// Import Modules Below
import auth from './modules/auth'
// Use Vuex
Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced:true,
  modules: {
    a:auth
  }
})

export default store;