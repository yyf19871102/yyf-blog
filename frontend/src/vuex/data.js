/**
 * Created by yinghe on 2017/8/29.
 */
import Vue        from 'vue';
import Vuex       from 'vuex';
import CryptoJS   from "crypto-js";

import SYS_VAR    from '../config/system'

Vue.use(Vuex);

const dataStore = new Vuex.Store({
  state: {
    user      : {},
    
    admin     : {},
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    
    getHeader(state) {
      if (state.admin && state.admin._id > -1 && state.admin.token) {
        return {
          headers: {
            "Authorization": CryptoJS.AES.encrypt(state.admin._id + '@' + state.admin.token, SYS_VAR.SALT).toString()
          }
        }
      } else {
        return {};
      }
    },
    
    getAdmin(state) {
      return state.admin
    }
  },
  
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    
    setAdmin(state, admin) {
      state.admin = admin;
    },
  },
  
  actions: {
    setUser({ commit }, user) {
      commit('setUser', user);
    },
    
    setAdmin({commit}, admin) {
      commit('setAdmin', admin);
    }
  }
});

export default dataStore;
