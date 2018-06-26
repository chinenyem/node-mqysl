// @ts-ignore: Unreachable code error

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface StateValue {
    user?: string,
    hash?:string,
    role?:string,
}

interface PayloadValue {
    user?: string,
    hash?:string,
    role?:string,
}    
    

const state: StateValue = {
     user: "",
     hash: "",
     role:""
}

const getters = {
  loggedIUser: (state:StateValue) => state,
}

const mutations = {
  authenticate (state:StateValue, payload:PayloadValue) {
    state.user = payload.user;
    state.hash = payload.hash;
    state.role = payload.role;
  },
  logout () {
    state.user = "";
    state.hash = "";
    state.role = "";
  },
}

const actions = {
  authenticate (state:any, payload:any) {
    state.user = payload.user;
    state.hash = payload.hash;
    state.role = payload.role;
  },
  logout (){
    state.user = "";
    state.hash = "";
    state.role = ""
  },
}

export default new Vuex.Store({
  state, 
  getters,
  mutations,
  actions,
});
